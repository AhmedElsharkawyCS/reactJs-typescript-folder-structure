import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { routes } from '../../routes';
import { CircularProgress } from '../../shared';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '30px 60px 50px 60px',
      height: `calc(100vh - ${300}px)`,
    },
  }),
);

export default function RoutesContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        <React.Suspense fallback={<CircularProgress />}>
          {routes.map((route, idx) => {
            return <Route {...route} key={idx} />;
          })}
        </React.Suspense>
      </Switch>
    </div>
  );
}
