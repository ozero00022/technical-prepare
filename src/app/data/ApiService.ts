import axios from 'axios';
import {NetworkResponse} from './NetworkResponse';

// interface ApiSettings {
//   headers?: any;
//   baseURL?: string;
// }

export default class ApiService {
  // headers = {};
  // baseURL = '';
  // constructor(pSettings?: ApiSettings) {
  //   if (pSettings) {
  //     this.headers = pSettings.headers;
  //     this.baseURL = pSettings.baseURL || '';
  //   }
  // }
  static async GET(pUrl: string, pConfigs?: any) {
    let res: NetworkResponse = new NetworkResponse();
    await axios
      .get(pUrl, pConfigs)
      .then((pRes: any) => res.setSucceed(pRes))
      .catch((pErr: any) => res.setFail(pErr));
    return res;
  }
}
