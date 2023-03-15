//PART ONE: (INCREMENT)
//1. 5 sections of a react function ex: imports, name, variables and functions, return, exports
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

//PART FOUR: (POST THE REVIEW TO AN ALERT POPUP THAT IS INVOKED WHEN THE USER CLICKS THE POST BUTTON)
//1. Do we need anything new in our return?
//2. Do we need any new state for an alert?
//3. Write a function to post a message in an alert that simulates the user posting data to the db

// ----------------------------------------------------------------
import './App.css';
import ReactTomatoes from './assets/tomatos.png'

function App() {

  return (
    <div className="App">
      <div className="form-group">
        <img id="tomato" src={ReactTomatoes} alt="rotten tomatos" />
        <h1>ReactTomatoes</h1>
      </div>

      {/* Start Here */}
      <div>
        <h2>Show Name:</h2>

        <div id="count">
          {/* mission: increment/decrement */}
          {/* bonus: find and import a picture to represent our class show */}
          let's build a counter!
        </div>

        <div id="review">
          {/* mission: leave a review and display it in live time */}
          {/* bonus: write validations that will pop up if review is less than 5 characters */}
          let's build a review form!
        </div>

        <h2>Dashboard:</h2>
        <div id="post">
          {/* mission: post review to an alert popup when post button is clicked */}
          {/* bonus: post review to dashboard */}
          let's build a synthetic 'post'!
        </div>
      </div>
    </div>
  );
}

export default App;
