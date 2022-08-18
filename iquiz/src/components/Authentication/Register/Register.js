import { AuthValidator } from "../../../helpers/validators";
import AuthForm from "../../Common/AuthForm";

const Register = () => {
    let fields = [
        { type: "text",  name: "fullName", placeholder: "Full Name", labelText: "Full Name", hasPreview: false, validator: AuthValidator.fullName },
        { type: "email",  name: "email", placeholder: "Email", labelText: "Email", hasPreview: false},
        { type: "password",  name: "password", placeholder: "Password", labelText: "Password", hasPreview: false }, 
        { type: "password",  name: "confirmPassword", placeholder: "Confirm Password", labelText: "Confirm Password", hasPreview: false }, 
      ]

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let fullName = formData.get('fullName');
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirmPassword');
        
        console.log(fullName, email, password, confirmPassword);
    }

    return (
        <AuthForm mainTitle="Learn & Create" title="Register" subtitle="Get prepared for your next job interview!" fields={fields} submitButtonText={"Register"} onSubmitParentHandler={onSubmitHandler}/>
    )
}

export default Register;


/*
const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });
    }
*/