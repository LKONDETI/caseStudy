import React, { useState} from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [updateScore, setUpdateScore] = useState(10);


  const quizData = [
    { 
        id:"1",
      question: "Who Wrote Harry Potter?",
      options: ["Chetan Bhagat", "R. K. Narayan", "Ruskin Bond", "Joanne Rowling"],
      answer: "Joanne Rowling"
    },
    {
        id:"2",
      question: "Who Played Harry Potter Role?",
      options: ["Tom cruise", "Daniel Jacob Radcliffe", "Jonny Depp", "Brad Pitt"],
      answer:"Daniel Jacob Radcliffe" 
    },
    {
        id:"3",
      question: "How many houses are in Harry Potter?",
      options: ["2", "3", "5", "1"],
      answer: "5"
    },
    {
        id:"4",
      question: "Who actually was the half blood prince?",
      options: ["Albus Dumbledore", "Severus Snape", "Bellatrix Lestrange", "Tom Riddle"],
      answer: "Severus Snape"
    },
    {
        id:"5",
      question: "At what age do children receive their Hogwarts letter?",
      options: ["9", "11", "12", "13"],
      answer: "11"
    },
    {
        id:"6",
      question: "Harry was raised by his mother’s sister. What was his aunt named?",
      options: ["Petunia", "Daisy", "Rose", "Hortense"],
      answer: "Petunia"
    },
    {
        id:"7",
      question: "What animal did Neville Longbottom lose on the Hogwarts Express?",
      options: ["Toad", "Mouse", "Cat", "Bat"],
      answer: "Toad"
    },
    {
        id:"8",
      question: "What are the colors of Ravenclaw?",
      options: ["Blue and silver", "Blue and bronze", "Blue and gold", "Blue and black"],
      answer: "Blue and bronze"
    },
    {
        id:"9",
      question: "Who invented the Snitch in the Harry Potter series?",
      options: ["Bowman Wright", "Gilderoy Lockhart", "Fred and George Weasley", "Albus Dumbledore"],
      answer: "Bowman Wright"
    },
    {
        id:"10",
      question: "How old was Luna when she lost her mom?",
      options: ["Three", "She never lost her mother", "Twelve", "Nine"],
      answer: "Nine"
    },
    
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handle = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 10);
      setUpdateScore(updateScore+10);
      localStorage.setItem("updateScore",updateScore);
      console.log(updateScore);
      
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
    
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <div>
        <div class="d-flex justify-content-between">
            <div><p>Question:{quizData[currentQuestion].id}</p></div>
          <div><h6 class="text-center">{quizData[currentQuestion].question}</h6></div>
          <div><p>Score:{score}</p></div>
          </div>
          <div class="d-flex gap-3">
          <ol type='A'>
            {quizData[currentQuestion].options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={option === selectedOption ? 'selected' : ''}
              >
                <button class="btn btn-light btn-sm" style={{marginBottom:'5px'}}>{option}</button>
              </li>
            ))}
          </ol></div>
          {selectedOption && (
            <button class="btn btn-light btn-sm" onClick={handle}  style={{float:'right', marginBottom:'5px', marginRight:'10px'}}>Next Question</button>
          )}
        </div>
      ) : (
        <div>
          <h4>Quiz completed!</h4>
          <h6>Congratulations! You have scored: {score}</h6>
        </div>
      )}
      </div>
  );
};

export default Quiz;
