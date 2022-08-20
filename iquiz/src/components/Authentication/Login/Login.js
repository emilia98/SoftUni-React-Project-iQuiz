import { AuthValidator } from "../../../helpers/validators";
import AuthForm from "../../Common/AuthForm";
import * as authService from '../../../services/authService';

const Login = () => {
    let fields = [
        { type: "text", name: "email", placeholder: "Email", labelText: "Email", validator: null },
        { type: "password", name: "password", placeholder: "Password", labelText: "Password", validator: AuthValidator.password }
    ]

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get("email");
        let password = formData.get("password");

        authService.login(email, password)
        .then(authData => {
            console.log(authData);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <AuthForm mainTitle="Continue Learning" title="Login" subtitle="We are happy that you are back in the game!" 
            fields={fields} submitButtonText={"Login"} onSubmitParentHandler={onSubmitHandler} customClass="login"/>
    )
}

export default Login;

/*
 authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
            */