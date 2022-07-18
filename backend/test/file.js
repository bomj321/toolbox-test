let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = require("chai").expect;
const url = "http://localhost:3900";

describe("get all files: ", () => {
  it("should get all files with status 200", (done) => {
    chai
      .request(url)
      .get("/api/files")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Verify data: ", () => {
  it("should be an object with an files array", (done) => {
    chai
      .request(url)
      .get("/api/files")
      .end(function (err, res) {
        const files = res.body.files;
        expect(files).to.have.lengthOf.greaterThan(0);
        done();
      });
  });

  it("should be an object file with one file and lines", (done) => {
    chai
      .request(url)
      .get("/api/files")
      .end(function (err, res) {
        const files = res.body.files;
        expect(files[0].file).to.be.a("string");
        expect(files[0].lines).to.have.property("text");
        expect(files[0].lines).to.have.property("number");
        expect(files[0].lines).to.have.property("hex");
        done();
      });
  });
});
