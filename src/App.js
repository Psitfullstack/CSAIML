
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Funcomp from './components/Funcomp';

function App() {
   const obj1={name:'jim',age:27}
  return (
    <>
    
     <Nav/>
     <Home/>
     <Funcomp {...obj1}  />
    
    </>
  );
}

export default App;
