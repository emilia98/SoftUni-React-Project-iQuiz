import './QuestionList.css';
import QuestionListItem from './QuestionListItem/QuestionListItem';

const QuestionList = () => {
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
                    questionList.map(question => {
                        console.log(question)
                        return ( <QuestionListItem id={question.id} key={question.id} title={question.title} 
                            level={question.level} addedAt={question.addedAt} answeredBy={question.answeredBy}  successRate={question.successRate}/>)
                    })
                }
                
            </div>
        </div>

    )
}

export default QuestionList;