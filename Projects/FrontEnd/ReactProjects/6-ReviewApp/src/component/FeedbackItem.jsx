import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Card from './SharedComponent/Card';


const FeedbackItem = ({ feedback, handleDelete, handleEdit }) => {


  return (
    <>
      <Card>
        <div className="card-wrapper">
          <h4>{feedback.text}</h4>

          <div className='icon-box'>
            <div className="edit" onClick={() => handleEdit(feedback.id)}><FaEdit size="18px" /></div>
            <div className="delete" onClick={() => handleDelete(feedback.id)}><FaTrash size="18px" /></div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default FeedbackItem