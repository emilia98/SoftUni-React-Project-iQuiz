import './QuestionList.css';
import { Link } from 'react-router-dom';

const QuestionList = () => {
    let questionList = [
        { title: "Some really easy question", level: "easy", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02" },
        { title: "Some really hard question", level: "hard", addedAt: "02/04/2021", answeredBy: 1001, successRate: "95.02" },
        { title: "Some medium question", level: "medium", addedAt: "93/01/2022", answeredBy: 1001, successRate: "95.02" },
        { title: "Some really easy question", level: "easy", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02" },
        { title: "Some medium quetion", level: "medium", addedAt: "25/08/2021", answeredBy: 1001, successRate: "95.02" }
    ]
    return (
        <div className="question-list-container">
            <h1>Question List</h1>
            <div className="question-list-content">
                <div className="question-list-item">
                    <div className="question-info">
                        <h2 className="question-title">The question content</h2>
                        <div className="question-props">
                            <div className="level">
                                <span className="level-label">Level</span>
                                <span className="level-diff easy"></span>
                                <span className="level word">Easy</span>
                            </div>
                            <div className="date-added">
                                <span className="icon">
                                    <i class="fa-solid fa-calendar-plus"></i>
                                </span>
                                <span className="date">
                                    25/08/2021
                                </span>
                            </div>
                            <div className="answered-times">
                                <span className="icon">
                                    <i class="fa-solid fa-people-group"></i>
                                </span>
                                <span className="answered">
                                    10144141
                                </span>
                            </div>
                            <div className="success-rate">
                                <span className="icon">
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <span className="rate">
                                    95.55%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="button" type="button">Solve</button>
                        <Link className="button-action" to="/login">
                            <span className="icon">
                            <i class="fa-solid fa-pencil"></i>
                            </span>
                        </Link>
                        <Link className="button-action" to="/register">
                            <span className="icon">
                            <i class="fa-solid fa-trash"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuestionList;