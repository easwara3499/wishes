import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file
import celebrateImage from './image5.jpg'; // Import the image

function App() {
  const [birthdayText, setBirthdayText] = useState("Happy Birthday!");
  const [inputValue, setInputValue] = useState(""); // State to hold the input value
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value as the user types
  };

  const handleWishSubmit = () => {
    // Add logic here to handle the submission of the wish
    console.log(`Wish from ${inputValue}: ${birthdayText}`);
    setInputValue(""); // Clear the input field after submission
    setShowNotification(true); // Show the notification
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after 3 seconds
    }, 3000);
  };

  useEffect(() => {
    const messages = [
      "Happy birthday ra manikanta",
      "chala ga undu mawa",
      "ado okati party mukyam biggulu",
      "Happy birthday ra manikanta"
    ];

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setBirthdayText(messages[randomIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <div className="greeting">
          <h1 className="scrolling-text">{birthdayText}</h1>
          <p>Wishing you a fantastic day filled with joy and laughter.</p>
          <p>May all your dreams and wishes come true!</p>
          <p>Best wishes, Manikanta!</p>
          <div className="centered-image">
            <img src={celebrateImage} alt="Celebrate" className="celebrate-image" />
          </div>
        </div>
      </header>
      <footer className="footer">
        <div className="emoji-scroll">
          <p> Happy Birthday ra  😊🎉🎈🎂🎁</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Your Name and Wish"
          />
          <button onClick={handleWishSubmit}>Submit</button>
        </div>
      </footer>
      {showNotification && (
        <div className="notification">
          <p>{`${inputValue}  Happy birthday ra!`}</p>
        </div>
      )}
    </div>
  );
}

export default App;
