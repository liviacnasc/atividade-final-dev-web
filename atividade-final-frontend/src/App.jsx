import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/open-sans"
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
