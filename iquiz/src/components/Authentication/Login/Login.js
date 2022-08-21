import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthValidator } from "../../../helpers/validators";
import AuthForm from "../../Common/AuthForm";
import * as authService from '../../../services/authService';
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

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
            toast.success("Successfully logged in!");
            userLogin(authData);
            navigate('/');
        })
        .catch(error => {
            if (error.errorMsg) {
                toast.error(error.errorMsg);
            }
        });
    }
    return (
        <AuthForm mainTitle="Continue Learning" title="Login" subtitle="We are happy that you are back in the game!" 
            fields={fields} submitButtonText={"Login"} onSubmitParentHandler={onSubmitHandler} customClass="login"/>
    )
}

export default Login;