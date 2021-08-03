import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

const theme = createTheme({
  palette,
  shadows,
  typography,
});

export default responsiveFontSizes(theme);
