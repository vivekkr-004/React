import "./App.css";
import Title from "./Title.jsx"
// import {Title} from "./Title.jsx"
// basically , this app fun is our App component.

// component create keya 


function Description () {
  return <h3>I am the Description! </h3>
}
function App() {

  // render the component . either use this -> <Title></Title> or <Title/>
  return (
  <div>
    <Title/>
    <Description/>
    <Title></Title>
    <Description/>
     <Title></Title>
  </div>);
   
}

export default App
