import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/MainDiv';

class App extends React.Component {

  render() {
    console.log(this.props.leads);
    return (
      <>
        <Header />
        <Main leads={this.props.leads} />
        <Footer />
      </>
    );
  }

}

export default App;