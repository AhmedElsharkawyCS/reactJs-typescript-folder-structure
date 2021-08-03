import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppHeader } from '../DefaultHeader';
import { AppDrawer } from '../DefaultDrawer';
import { RoutesContainer } from '../DefaultRoutes';
import { CustomToolbar } from '../../shared';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      minWidth: 500,
      overflowX: 'auto',
    },
  }),
);
export default function MainLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* header */}
      <AppHeader />
      {/* sidemenu */}
      <AppDrawer />
      {/* content */}
      <main className={classes.content}>
        <CustomToolbar />
        {/* app route container */}
        <RoutesContainer />
      </main>
    </div>
  );
}
