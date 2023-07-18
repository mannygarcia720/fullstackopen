import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = 'Peter';
  const age = 10;

  console.log(now, a+b);
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = 'Maya' age = {26+10}/>
      <Hello name = {name} age = {age}/>
    </>
    
  );
}

export default App;
