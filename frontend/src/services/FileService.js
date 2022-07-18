import axios from 'axios';
import environment from '../libs/environment';

export default {
  getFiles: () =>
    axios({
      method: 'GET',
      url: `${environment.baseUrl}/api/files`,
    }),
};
