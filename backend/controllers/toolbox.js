"use strict";

const url = "https://echo-serv.tbxnet.com/v1";
const axios = require("axios").default;

const config = {
  headers: {
    Authorization: "Bearer aSuperSecretKey",
  },
};

async function requestFiles(filesArray) {
  let filesDataArray = [];

  for (let i = 0; i < filesArray.length; i++) {
    await axios
      .get(`${url}/secret/file/${filesArray[i]}`, config)
      .then(function (response) {
        filesDataArray.push({
          file: filesArray[i],
          data: response.data.split("\n"),
        });
      })
      .catch(function (error) {
        // console.log(error);
      });
  }
  return filesDataArray;
}

async function formatFiles(files) {
  let formatedData = [];
  // Loop files
  for (let i = 0; i < files.length; i++) {
    let dataArray = {};
    // Loop to verify if exists data
    if (files[i].data.length > 1) {
      // Loop the data
      for (let j = 1; j < files[i].data.length; j++) {
        //Verify if exist all the data
        let dataSplitted = files[i].data[j].split(",");

        if (
          dataSplitted[0] &&
          dataSplitted[1] &&
          dataSplitted[2] &&
          dataSplitted[3]
        ) {
          dataArray = {
            text: dataSplitted[1],
            number: dataSplitted[2],
            hex: dataSplitted[3],
          };

          formatedData.push({
            file: files[i].file,
            lines: dataArray,
          });
        }

        dataArray = {};
      } // End loop
    } // End if
  } // End loop

  return formatedData;
}

var controller = {
  test: (req, res) => {
    return res.status(200).send({
      message: "Test route",
    });
  },

  files: (req, res) => {
    axios
      .get(`${url}/secret/files`, config)
      .then(async function (response) {
        let filesArray = response.data.files;
        let files = await requestFiles(filesArray);

        let filesFormatted = await formatFiles(files);

        return res.status(200).send({
          files: filesFormatted,
        });
      })
      .catch(function (error) {
        return res.status(500).send({
          message: "Internal server error",
        });
      });
  },
}; // end controller
module.exports = controller;
