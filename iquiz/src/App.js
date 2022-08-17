import TextField from "./components/Common/TextField";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <TextField type={"text"} name={"firstName"} placeholder={"First Name"} labelText={"First Name"} hasPreview={true}/>
    </div>
    
  );
}

export default App;
