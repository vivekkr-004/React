import "./App.css";

// basically , this app fun is our App component.

// component create keya 
function Title() {
  return <h1>I am the Title!</h1>;
}

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
