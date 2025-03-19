import React from 'react';
import { Header } from './components/Header';
import './styles/global.css';
import Styles from './App.module.css';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div>
      <Header />

      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          <h2>Content goes here</h2>
        </main>
      </div>
    </div>
  );
};

export default App;