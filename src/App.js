import React from 'react';
import './App.scss';
import ComponentTop from './mainComponents/ComponentTop/ComponentTop'
import ComponentMid from './mainComponents/ComponentMid/ComponentMid'
import ComponentBottom from './mainComponents/ComponentBottom/ComponentBottom'
import Necklace from './mainComponents/Necklace/Necklace'
import Footer from './mainComponents/Footer/Footer'
import Wood from './mainComponents/Wood/Wood'

class App extends React.Component{
  render(){
  return (
    <>
    <div className="App">
      <Necklace/>
      <ComponentTop/>
      <ComponentMid/>
      <ComponentBottom/>
      <Footer/>
      </div>
    <Wood/>
    </>
  );
}
}

export default App;
