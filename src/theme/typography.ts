import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {};
