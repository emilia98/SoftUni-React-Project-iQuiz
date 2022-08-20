import './CreateQuestion.css';
import { useState } from 'react';
import TextField from '../../../Common/TextField';
import { QuestionValidator } from '../../../../helpers/validators';

const CreateQuestion = () => {
    const [values, setValues] = useState({
        answers: []
    });

    let questionField = {
        type: "text", name: "questionTitle", placeholder: "Question Content", labelText: "Question Content", hasPreview: true, validator: QuestionValidator.questionContent
    }

    const onAddAnswerClick = (e) => {
        let allAnswers = values.answers;
        if (allAnswers.length === 4) {
            return
        }

        let answer = {
            type: "text",
            name: "answer",
            placeholder: "Answer",
            labelText: "Answer",
            hasPreview: true,
            validator: QuestionValidator.answerContent
            // isCorrect: false
        }

        allAnswers.push(answer);
        setValues(prevValues => {
            return { ...prevValues, answers: allAnswers }
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let question = formData.get('questionTitle');
        let answer1 = formData.get("answer-1");
        let answer2 = formData.get("answer-2");
        let answer3 = formData.get("answer-3");
        let answer4 = formData.get("answer-4");

        console.log(question, answer1, answer2, answer3, answer4);
    }

    return (
        <div className="create-question-container">
            <div className="create-question-fun">
                <h1 className="main-title">Create Question</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="question-details">
                        <p className="section-title">Question Details</p>
                        <div className='question-content'>
                        <div className="question-content-field">
                            <TextField type={questionField.type} name={questionField.name} placeholder={questionField.placeholder} labelText={questionField.labelText}
                                hasPreview={questionField.hasPreview} validator={questionField.validator} />
                        </div>
                        <div className="add-new-btn">
                            <button type="button" onClick={onAddAnswerClick}>Add Answer</button>
                        </div>
                        </div>
                    </div>
                    <div className="answer-details">
                        <p className="section-title">Answers Details</p>
                        {
                            values.answers.map((answer, index) => {
                                let answerLabel = `${answer.labelText} #${index + 1}`;
                                let answerName = `answer-${index}`;
                                return (
                                    <div className="create-question-answer-view" key={index}>
                                        <TextField type={answer.type} name={answerName} placeholder={`${answerLabel} Content`} labelText={answerLabel}
                                            hasPreview={answer.hasPreview} validator={answer.validator} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="submit-form-btn">
                        <button type="submit">Create Question</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateQuestion;