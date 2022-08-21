import './CreateQuestion.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

import * as questionService from '../../../../services/questionService';

import TextField from '../../../Common/TextField';
import { QuestionValidator } from '../../../../helpers/validators';
import Checkbox from '../../../Common/Checkbox';
import { useNavigate } from 'react-router-dom';

const CreateQuestion = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        answers: [],
        rowIndex: 0
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
            id: values.rowIndex,
            validator: QuestionValidator.answerContent,
            isCorrect: false
        }

        allAnswers.push(answer);
        setValues(prevValues => {
            return { ...prevValues, answers: allAnswers, rowIndex: values.rowIndex + 1 }
        })
    }

    const onDeleteAnswerClicked = (e) => {
        let rowIndex = parseInt(e.target.getAttribute("data-id"));
        let answers = values.answers.filter(a => {
            return a.id !== rowIndex;
        });
        setValues(prevValues => {
            return { ...prevValues, answers: answers }
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let question = formData.get('questionTitle');
        let answer1 = { text: formData.get('answer-1'), isCorrect: formData.get("answer-1-checkbox") ? true : false }
        let answer2 = { text: formData.get("answer-2"), isCorrect: formData.get("answer-2-checkbox") ? true : false }
        let answer3 = { text: formData.get('answer-3'), isCorrect: formData.get("answer-3-checkbox") ? true : false }
        let answer4 = { text: formData.get("answer-4"), isCorrect: formData.get("answer-4-checkbox") ? true : false }

        let allAnswersGenerated = [answer1, answer2, answer3, answer4];
        if (allAnswersGenerated.every(x => !x || !x.text || x.text.length === 0)) {
            toast.error("Please, provide at least one non-empty answer!");
            return;
        }

        if (allAnswersGenerated.every(c => !c.isCorrect)) {
            toast.error("Select at least one correct answer!");
            return;
        }

        let data = {
            title: question,
            level: 0,
            answers: extractAnswers(allAnswersGenerated)
        };

        questionService.create(data)
        .then(response => {
            if (response.successMsg) {
                toast.success(response.successMsg);
                navigate('/questionlist');
                return;
            }
            console.log(response);
        })
        .catch(error => {
            console.log(error);
            if (error.errorMsg) {
                toast.error(error.errorMsg);
                return
            }
        });
    }

    const extractAnswers = (allAnswers) => {
        let answers = []
        for (let answer of allAnswers) {
            if (answer && answer.text && answer.text.length > 0) {
                answers.push({ text: answer.text, isCorrect: answer.isCorrect });
            }
        }
        return answers;
    };

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
                                let answerName = `answer-${index + 1}`;
                                return (
                                    <div className="create-question-answer-view" key={index}>
                                        <TextField key={answer.id} type={answer.type} name={answerName} placeholder={`${answerLabel} Content`} labelText={answerLabel}
                                            hasPreview={answer.hasPreview} validator={answer.validator} />
                                        <div className="checkbox-container">
                                            <Checkbox name={`${answerName}-checkbox`} label={"Is Answer correct"} />
                                        </div>
                                        <button type="button" className="delete-answer" onClick={onDeleteAnswerClicked} data-id={ answer.id }>
                                            <i className="fa-solid fa-minus" data-id={ answer.id }></i>
                                        </button>
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