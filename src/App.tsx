import React from 'react';
import Main from './components/leyouts/Main';
import Header from './components/leyouts/Header';
import UserProvider from './context/userContext';


function App() {
  return (
    <>
      <Header />
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
