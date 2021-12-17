import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button, SignUpModal } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Button style={{background: '#1B263B', color: '#f1f1f1'}} onClick={() => setUseDarkTheme(true)}>
        Dark Theme
      </Button>

      <Button style={{background: 'none', border: '1px solid #111'}} onClick={() => setUseDarkTheme(false)}>
        Default Theme
      </Button>

      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: 'pointer',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: '#a9fbd7',
          padding: '10px 20px'
        }}
        onClick={() => setShowModal(!showModal)}
      >
        Show Modal
      </button>

      <div
        style={{
          background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <SignUpModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
