import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as questionService from '../../../../services/questionService';

const QuestionDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        questionService.deleteById(id)
        .then(data => {
            if (data.successMsg) {
                toast.success(data.successMsg);
            }

            navigate('/questionlist');
        })
        .catch(error => {
            if (error.errorMsg) {
                toast.error(error.errorMsg ?? error ?? "An error occurred while deleteing a question!");
            }

            navigate('/questionlist');
        });
        
    });

    return null;
}

export default QuestionDelete;