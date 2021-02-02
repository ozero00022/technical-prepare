import MobileDataService from 'app/data/MobileDataService';
import {MobileData} from 'app/domain/entity/MoblieData';

const newMobileData = (pYear?: string, pVolume?: number, pIsDecreased?: boolean): MobileData => ({
  year: pYear ?? '',
  volumeOfData: pVolume ?? -1,
  isDecreased: pIsDecreased ?? false,
});

export default class MobileDataRepository {
  private mobileDataService: MobileDataService;
  constructor() {
    this.mobileDataService = new MobileDataService();
  }

  async get() {
    let dataList: MobileData[] = [];
    let res = await this.mobileDataService.get();
    if (res.isSuccess) {
      let toBeAdded = newMobileData();
      let lastQuarterVolume = -1;
      for (const itrData of res.response.data.result.records) {
        const volume = Number(itrData.volume_of_mobile_data);
        const [yr] = itrData.quarter.split('-');
        if (toBeAdded.year === yr) {
          toBeAdded.volumeOfData += volume;
          if (lastQuarterVolume > volume) toBeAdded.isDecreased = true;
        } else {
          if (toBeAdded.volumeOfData !== -1) dataList.push(toBeAdded);
          toBeAdded = newMobileData(yr, volume, false);
        }
        lastQuarterVolume = volume;
      }
    }
    return dataList;
  }
}
