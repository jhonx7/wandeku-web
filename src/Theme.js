import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  primaryGradient: 'linear-gradient(45deg, #683BB2 10%, #53D4F1 90%)',
  secondaryGradient: 'linear-gradient(45deg, #F8516C 10%, #F98145 90%)',
  palette: {
    primary: {
      //light: '#278577',//'#69696a',
      main: '#53D4F1',//'#28282a',
      dark: '#683BB2',//'#1e1e1f',
    },
    secondary: {
      light: '#9570DD',
      main: '#9F05C5',
      dark: '#730C99',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
});


export default theme;