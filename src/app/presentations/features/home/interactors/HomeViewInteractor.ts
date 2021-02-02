import MobileDataRepository from 'app/domain/repository/MobileDataRepository';
import {excuteAsync} from 'app/common/utils/AsyncCaller';
import {store, updateList} from 'app/framework/reduxtoolkit';

export default class HomeViewInteractor {
  private repository: MobileDataRepository;
  constructor() {
    this.repository = new MobileDataRepository();
  }

  updateList() {
    excuteAsync(this.repository.get(), (pData) => store.dispatch(updateList(pData)));
  }
}
