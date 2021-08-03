import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card as MUICard, CardProps } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 600,
      width: 500,
    },
  }),
);

interface IProps extends CardProps {
  onCardClick?: () => void;
  className?: string;
}
export default function Card({ className, ...props }: IProps) {
  const classes = useStyles();
  return (
    <MUICard className={clsx(classes.root, className)} onClick={props.onCardClick} elevation={5} {...props}>
      <CardContent>{props.children}</CardContent>
    </MUICard>
  );
}

Card.defaultProps = {
  className: '',
  onCardClick: () => {},
};
