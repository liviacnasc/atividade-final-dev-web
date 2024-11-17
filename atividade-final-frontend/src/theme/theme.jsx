import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily:'Jost'
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },

  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'white'
        }
      }
    },
    MuiTooltip: {
      styleOverrides:{
        tooltip: {
          color: 'white',
          backgroundColor: 'black'
        },
        arrow: {
          color:'black'
        }
      }
    },
    MuiIconButton: {
      styleOverrides:{
        root: {
          '&:hover': { color: '#1976d2'}
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    },
  },
});