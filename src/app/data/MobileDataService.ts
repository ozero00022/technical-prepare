import ApiService from './ApiService';

export default class MobileDataService {
  async get() {
    return ApiService.GET(
      'https://data.gov.sg/api/action/datastore_search?resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f&limit=100',
    );
  }
}
