class AuthValidator {
    static fullName(value) {
        if (!value || value.length === 0) {
            return { valid: false, message: "Full Name is required!" }
        }

        if (value.length < 3 || value.length > 25) {
            return { valid: false, message: "Full Name should be between 3 and 25 characters long!" }
        }

        return { valid: true, message: "" }
    }

    static username(value) {
        let valueLength = value.length;

        if (!value || valueLength === 0) {
            return { valid: false, message: "Username is required!" }
        }

        if (valueLength < 3 || valueLength > 22) {
            return { valid: false, message: "Username should be between 3 and 22 characters long!" }
        }

        return { valid: true, message: "" }
    }

    static password(value) {
        if (!value || value.length === 0) {
            return { valid: false, message: "Password is required!" }
        }

        if (value.length < 8 || value.length > 20) {
            return { valid: false, message: "Password should be between 8 and 20 characters long!"}
        }

        return { valid: true, message: "" }
    }

    static confirmPassword(value, comparableValue) {
        if (!value || value.length === 0) {
            return { valid: false, message: "Confirm Password is required!" }
        }

        if (value !== comparableValue) {
            return { valid: false, message: "Both passwords doesn't match!" }
        }

        return { value: true, message: "" }
    }
}

export default AuthValidator;