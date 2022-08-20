import { AuthValidator } from "../../../helpers/validators";
import AuthForm from "../../Common/AuthForm";
import * as authService from '../../../services/authService';

const Register = () => {
    let fields = [
        { type: "text",  name: "username", placeholder: "Username", labelText: "Username", hasPreview: false, validator: AuthValidator.username },
        { type: "email",  name: "email", placeholder: "Email", labelText: "Email", hasPreview: false,},
        { type: "password",  name: "password", placeholder: "Password", labelText: "Password", hasPreview: false, validator: AuthValidator.password }, 
        { type: "password",  name: "confirmPassword", placeholder: "Confirm Password", labelText: "Confirm Password", hasPreview: false, validator: AuthValidator.confirmPassword }, 
    ]

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirmPassword');

        authService.register(username, email, password)
        .then(authData => {
            console.log(authData);
        })
        .catch(errors => {
            console.log(Object.keys(errors));
            console.log(errors);
            console.log(errors["Email"]);
        });
    }

    return (
        <AuthForm mainTitle="Learn & Create" title="Register" subtitle="Get prepared for your next job interview!" 
            fields={fields} submitButtonText={"Register"} onSubmitParentHandler={onSubmitHandler}/>
    )
}

export default Register;