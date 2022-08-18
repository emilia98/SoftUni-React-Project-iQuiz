import AuthForm from "./components/Common/AuthForm";
import TextField from "./components/Common/TextField";

function App() {
  let fields = [
    { type: "text",  name: "firstName", placeholder: "First Name", labelText: "First Name", hasPreview: true },
    { type: "email",  name: "email", placeholder: "Email", labelText: "Email", hasPreview: false},
    { type: "password",  name: "password", placeholder: "Password", labelText: "Password", hasPreview: false }, 
    { type: "password",  name: "confirmPassword", placeholder: "Confirm Password", labelText: "Confirm Password", hasPreview: false }, 
  ]
  return (
    <div>
      <h1>Hello World</h1>
      <AuthForm mainTitle="Learn & Create" title="Register" subtitle="Get prepared for your next job interview!" fields={fields} />
    </div>
    
  );
}

export default App;
