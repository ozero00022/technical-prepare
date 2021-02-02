import HomeViewInteractor from '../interactors/HomeViewInteractor';

export default class HomeViewModel {
  private interactor: HomeViewInteractor;
  constructor() {
    this.interactor = new HomeViewInteractor();
  }
  onLoad() {
    this.interactor.updateList();
  }
  onDeclineClick() {
    alert('decreased');
  }
}
