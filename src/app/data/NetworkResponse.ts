export class NetworkResponse {
  isSuccess: boolean;
  response: any;
  error: any;
  constructor() {
    this.isSuccess = false;
    this.response = null;
    this.error = null;
  }

  setSucceed(pData: any) {
    this.isSuccess = true;
    this.response = pData;
  }
  setFail(pErr: any) {
    this.error = pErr;
  }
}
