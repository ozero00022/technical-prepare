import {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import routes, {AppRoute} from './common/configs/routes';
import {Provider} from 'react-redux';
import {store} from 'app/framework/reduxtoolkit/index';

function App() {
  const renderRoutes = (pRoutes: AppRoute[]) => {
    return pRoutes.map((itrRoute, idx) => {
      return (
        <Route key={`route${itrRoute.path}`} path={itrRoute.path} component={itrRoute.component} />
      );
    });
  };

  return (
    <Provider store={store}>
      <div className="app">
        <section className="app-body">
          <BrowserRouter>
            <Suspense fallback="is loading...">
              <Switch>
                {renderRoutes(routes)}
                <Redirect to="/home" />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </section>
      </div>
    </Provider>
  );
}

export default App;
