import React, { useContext } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Card from './SharedComponent/Card';
import FeedbackContext from '../Context/FeedbackContext';


const FeedbackItem = () => {

  const { feedback, handleDeleteFeedback, handleEditFeedback } = useContext(FeedbackContext);

  const [feedbackItem] = feedback;



  return (
    <>
      <Card>
        <div className="card-wrapper">
          <h4>{feedbackItem.text}</h4>

          <div className='icon-box'>
            <div className="edit" onClick={() => handleEditFeedback(feedbackItem.id)}><FaEdit size="18px" /></div>
            <div className="delete" onClick={() => handleDeleteFeedback(feedbackItem.id)}><FaTrash size="18px" /></div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default FeedbackItem