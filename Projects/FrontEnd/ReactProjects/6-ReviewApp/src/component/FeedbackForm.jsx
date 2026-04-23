import React from 'react'
import Card from './SharedComponent/Card'
import Button from './SharedComponent/Button'

const FeedbackForm = () => {
    return (
        <>
            <Card>
                <h3>Add your feedback</h3>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your feedback..." />
                        <Button version={"primary"} type={"submit"} isDisabled={false} >Send</Button>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default FeedbackForm