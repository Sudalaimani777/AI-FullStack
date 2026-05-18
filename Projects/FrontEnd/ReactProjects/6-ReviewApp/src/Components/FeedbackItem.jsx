import React, { useContext } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Card from './SharedComponent/Card';
import FeedbackContext from '../Context/FeedbackContext';


const FeedbackItem = ({ item }) => {

  const { handleDeleteFeedback, handleEditFeedback } = useContext(FeedbackContext);



  return (
    <>
      <Card>
        <div className="card-wrapper">
          <h4>{item.text}</h4>

          <div className='icon-box'>
            <div className="edit" onClick={() => handleEditFeedback(item)}><FaEdit size="18px" /></div>
            <div className="delete" onClick={() => handleDeleteFeedback(item.id)}><FaTrash size="18px" /></div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default FeedbackItem