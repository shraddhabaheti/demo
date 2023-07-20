import logo from './logo.svg';
import './App.css';
import Calc from './Calc';
import Inc from './Inc';
import { Createpage } from './Createpage';
import { createContext } from 'react';
import Search from './Search';

const FirstData= createContext();

function App() {
 let currrntDate=new Date();

// const FirstData= createContext();

 currrntDate = currrntDate.getHours();
 let data=''
 const cssstyle={}
 if(currrntDate>=1 && currrntDate<12){
   data="good mornig"
   cssstyle.color="red"
 }else if(currrntDate >=12 && currrntDate<19){
  data="good afternoon"
  cssstyle.color="green"
 }else{
   data='good night'
 }
 
 
  return (
    <div className="App">
      {/* <Calc /> */}
      {/* <Inc/> */}
      {/* <FirstData.Provider value="shraddhabaheti">
      <Createpage/>
      </FirstData.Provider> */}
      
      <h1>hello sir <span style={cssstyle}>{data}</span> </h1>
       <Search/>
       </div>
  );
}


export default App;
