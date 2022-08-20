class QuestionValidator {
    static questionContent(value) {
        let valueLength = value.length;

        if (!value || value.length === 0) {
            return { valid: false, message: "Question Content is required!" };
        }

        if (valueLength < 10 || valueLength > 100) {
            return { valid: false, message: "Question Content should be between 10 and 100 characters long!" };
        }

        return { valid: true, message: "" };
    }

    static answerContent(value) {
        let valueLength = value.length;

        if (!value || valueLength === 0) {
            return { valid: false, message: "Answer Content is required!" };
        }

        if (valueLength > 100) {
            return { valid: false, message: "Answer Content should be at most 100 characters long!" };
        }

        return { valid: true, message: "" };
    }
}

export default QuestionValidator;