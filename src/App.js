import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContext";
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from './context/LanguageContext'

import './App.css'


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
