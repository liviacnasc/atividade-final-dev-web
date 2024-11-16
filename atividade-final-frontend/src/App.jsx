import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import '@fontsource/jost'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
