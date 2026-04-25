import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Card from './SharedComponent/Card';


const FeedbackItem = ({feedback}) => {
  return (
    <>
       <Card>
            <div className="card-wrapper">
                <h4>{feedback.text}</h4>

                <div className='icon-box'>
                    <div className="edit"><FaEdit size="18px"/></div>
                    <div className="delete"><FaTrash size="18px"/></div>
                </div>
            </div>
       </Card>
    </>
  )
}

export default FeedbackItem