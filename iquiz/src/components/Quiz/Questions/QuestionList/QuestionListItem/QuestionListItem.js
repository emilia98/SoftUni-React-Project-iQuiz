import './QuestionListItem.css';
import { Link } from 'react-router-dom';

const QuestionListItem = ({ id, title, level, addedAt, answeredBy, successRate, createdBy, currentUser }) => {
    let levelWord = level.charAt(0).toUpperCase() + level.slice(1);

    console.log(createdBy, currentUser);
    
    return (
        <div className="question-list-item">
            <div className="question-info">
                <h2 className="question-title">{title}</h2>
                <div className="question-props">
                    <div className="level">
                        <span className="level-label">Level</span>
                        <span className={`level-diff ${level}`}></span>
                        <span className="level word">{levelWord}</span>
                    </div>
                    <div className="date-added">
                        <span className="icon">
                            <i className="fa-solid fa-calendar-plus"></i>
                        </span>
                        <span className="date">
                            {addedAt}
                        </span>
                    </div>
                    <div className="answered-times">
                        <span className="icon">
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <span className="answered">
                            {answeredBy}
                        </span>
                    </div>
                    <div className="success-rate">
                        <span className="icon">
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="rate">
                            {`${successRate}%`}
                        </span>
                    </div>
                </div>
            </div>
            {currentUser.username ? (
                <div className="actions">
                    {
                        createdBy === currentUser.username ?
                        (
                            <div className="button-action">
                            <Link className="button-action" to="/login">
                                <span className="icon">
                                    <i className="fa-solid fa-pencil"></i>
                                </span>
                            </Link>
                            <Link className="button-action" to="/register">
                                <span className="icon">
                                    <i className="fa-solid fa-trash"></i>
                                </span>
                            </Link>
                        </div>
                        ) :
                        (
                            <button className="button" type="button">Solve</button>
                        )
                    }
                </div>
            ) : null}
        </div>
    )
}

export default QuestionListItem;