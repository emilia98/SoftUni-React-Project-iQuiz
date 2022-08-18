import TextField from '../TextField';
import './AuthForm.css';

const AuthForm = ({ mainTitle, title, subtitle, fields, onSubmitParentHandler, submitButtonText }) => {
    return (
        <div className="auth-form-full-container">
            <div className="auth-form-container">
                <p className="auth-form-main-title">{ mainTitle }</p>
            <h1 className="auth-form-title">
                { title }
            </h1>
            <h2 className="auth-form-subtitle">
                { subtitle }
            </h2>
            <form onSubmit={onSubmitParentHandler}>
            {
                fields.map(field => (
                    <div className="field-type">
                        <TextField key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} 
                            labelText={field.labelText} hasPreview={field.hasPreview} validator={field.validator}/>
                        </div>
                ))
            }
        <div className="submit-btn">
            <button type="Submit">{submitButtonText}</button>
        </div>
            </form>
           
        </div>
        </div>
        
    )
}

export default AuthForm;

/*
<TextField type={"text"} name={"firstName"} placeholder={"First Name"} labelText={"First Name"} hasPreview={true}/>
*/