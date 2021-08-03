import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { ThemeProvider, jssPreset, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { mainTheme } from './theme';
import { ToastContainer, CircularProgress } from './shared';

const AppContainer = React.lazy(() => import('./containers'));
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName({
  seed: 'go-event', //to avoid local conflict (class name prefix)
  productionPrefix: 'd', //to avoid prod conflict
});

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={mainTheme}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Router>
          <Switch>
            <React.Suspense fallback={<CircularProgress />}>
              <Route key="sample-app" component={AppContainer} />
            </React.Suspense>
          </Switch>
        </Router>
        <ToastContainer />
      </StylesProvider>
    </ThemeProvider>
  );
}
