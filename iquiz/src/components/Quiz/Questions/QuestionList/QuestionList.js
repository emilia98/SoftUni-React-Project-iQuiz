import { useEffect, use, useState } from 'react';


import './QuestionList.css';
import QuestionListItem from './QuestionListItem/QuestionListItem';
import { useAuthContext } from '../../../../contexts/AuthContext';
import * as questionService from '../../../../services/questionService';

const QuestionList = () => {
    let { user } = useAuthContext();
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        questionService.getAll()
        .then(data => {
            if (data.questions) {
                setQuestions(data.questions);
                return
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, [questions.length]);
    
    let questionList = [
        { title: "Some really easy question", level: "easy", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02", id: 1 },
        { title: "Some really hard question", level: "hard", addedAt: "02/04/2021", answeredBy: 1001, successRate: "95.02", id: 2 },
        { title: "Some medium question", level: "medium", addedAt: "93/01/2022", answeredBy: 1001, successRate: "95.02", id: 3 },
        { title: "Some really easy question", level: "easy", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02", id: 4 },
        { title: "Some medium quetion", level: "medium", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02", id: 5 }
    ]
    return (
        <div className="question-list-container">
            <h1>Question List</h1>
            <div className="question-list-content">
                {
                    !questions || questions.length == 0 ?
                        <div className="loading">Loading...</div> 
                    :
                        questions.map(question => {
                            return ( <QuestionListItem id={question.id} key={question.id} title={question.title} 
                                level={question.level} addedAt={question.createdOn} answeredBy={question.answeredBy} successRate={question.successRate} 
                                createdBy={question.createdBy} currentUser={user}/>)
                    })
                }
                
            </div>
        </div>

    )
}

export default QuestionList;