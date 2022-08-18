class AuthValidator {
    static fullName(value) {
        console.log("value", value);
        if (!value || value.count === 0) {
            return { valid: false, message: "Full Name is required!", value: value }
        }

        if (value.count < 3 || value.count > 25) {
            return { valid: false, message: "Full Name should be between 3 and 25 characters long!" }
        }

        return { valid: true, message: "" }
    }
}

export default AuthValidator;