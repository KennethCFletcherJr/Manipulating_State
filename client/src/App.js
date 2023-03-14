import './App.css';
import { useState } from 'react'

// Extra notes:
// Both ways to do an incrementer: 
// 1. const bestShowHandler = () => {setShow(show + 1)}   
// 2. () => setShow(show+1)


//PART ONE: (INCREMENT)
//1. Go over the 5 sections of a react function ex: imports, name, variables and functions, return, exports
//2. Check that return is displaying (favorite show among the class?)
//3. Setup useState (3 important parts regarding state)
//4. Setup the Syntehic Event Listeners (where the user interacts)
//5. Setup the result from the event (what the user sees)
//6. Make the numbers increment (there are 2 main ways to do this)

//PART TWO: (DECREMENT)
//1. Do we need anything new in our return?
//2. Do we need any new state?
//3. Make the numbers decrement
//4. BONUS: don't allow the likes number to go below zero

//PART THREE: (WRITE REVIEW)
//1. Do we need anything new in our return?
//2. Do we need any new state?
//3. Which event listener do we need
//4. Write function to display the users review in real time

//PART FOUR: (MAKE AN ALERT THAT IS INVOKED WHEN THE USER CLICKS THE POST BUTTON)
//1. Do we need anything new in our return?
//2. Do we need any new state for an alert?
//3. Write a function to post a message in an alert that simulates the user posting data to the db

function App() {

  const [show, setShow] = useState(0)
  const [review, setReview] = useState("...awaiting it's first review")

  const likeHandler = () => {
    setShow(show + 1)
  }

  const dislikeHandler = () => {
    if (show > 0) {
      setShow(show - 1)
    }
  }

  const reviewHandler = (e) => {
    setReview(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`The Office has ${show} likes. \n Your review says The Office is: ${review}.`)
  }


  //Go over 
  return (
    <form onSubmit={submitHandler} className="App">
      <div>
        <h2>The Office has: {show} likes</h2>
        <button type='button' onClick={likeHandler}>Like</button>
        <button type='button' onClick={dislikeHandler}>Dislike</button>
      </div>
      <hr />
      <div>
        <label>Write a review: </label>
        <input type='text' onChange={reviewHandler} />
        <h2>The Office is: {review}</h2>
      </div>
      <input type='submit' value='Post' />
    </form>
  );
}

export default App;
