import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily:'Open Sans'
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      }
    },
    MuiListItem: {
      defaultProps: {
        color: '#000', 
      },
    },
  },
});