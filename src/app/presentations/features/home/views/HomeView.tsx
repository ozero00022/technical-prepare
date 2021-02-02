import './HomeView.css';
import HomeViewModel from '../viewmodels/HomeViewModel';
import {MobileData} from 'app/domain/entity/MoblieData';
import {useEffect} from 'react';
import {connect} from 'react-redux';

const HomeView = (props: any) => {
  const viewModel = new HomeViewModel();
  useEffect(() => {
    viewModel.onLoad();
  }, []);

  const renderDownTrend = (pIsDecreased: any) => (pIsDecreased ? <span>&#x2198;</span> : <></>);

  const renderList = (pList: MobileData[]) => {
    return (
      <div className="mobile-data-list">
        <div className="mobile-data-list-header">Singapore's mobile network</div>
        <div className="list-container">
          {pList.map((itrData) => {
            const itrCardClass = 'mobile-data-list-card' + (itrData.isDecreased ? ' decline' : '');
            const itrOnClick = itrData.isDecreased ? viewModel.onDeclineClick : () => {};
            return (
              <div key={`year${itrData.year}`} className={itrCardClass} onClick={itrOnClick}>
                {renderDownTrend(itrData.isDecreased)} {itrData.year} - {itrData.volumeOfData}
              </div>
            );
          })}
          {pList.length === 0 && <div className="mobile-data-list-card">No Data</div>}
        </div>
      </div>
    );
  };

  return <div className="home-view">{renderList(props.dataList)}</div>;
};

const mapStateToProps = (state: any) => {
  return {dataList: state.dataList};
};

export default connect(mapStateToProps)(HomeView);
