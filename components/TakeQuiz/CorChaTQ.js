import React, { useState } from 'react';

const CCQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [updateS, setUpdateS] = useState(10);

  const quizData = [
    { 
        id:"1",
      question: "New York stock exchange is nick named as?",
      options: ["The big bang", "Footsie", "The big board", "The stock board"],
      answer: "The big board"
    },
    {
        id:"2",
      question: "Brand factory is owned by?",
      options: ["Tata group", "Aditya birla group", "Raheja group", "Future group"],
      answer:"Future group" 
    },
    {
        id:"3",
      question: "Chairman of Aditya birla group?",
      options: ["Kumar mangalam birla", "Azim premji", "Sudha murthy", "Cyrus Mistry"],
      answer: "Kumar mangalam birla"
    },
    {
        id:"4",
      question: "Nuclear non proliferation treaty has five states. Which of the following is not one of them?",
      options: ["China", "US", "France", "India"],
      answer: "India"
    },
    {
        id:"5",
      question: "What is the FDI limit in wholesale trading?",
      options: ["51%", "100%", "49%", "74%"],
      answer: "100%"
    },
    {
        id:"6",
      question: "In which country is Porsche headquatered ?",
      options: ["France", "Italy", "Japan", "Germany"],
      answer: "Germany"
    },
    {
        id:"7",
      question: "What is the world's largest cosmetics and beauty company?",
      options: ["Loreal", "Lakme", "P&G", "Colorbar"],
      answer: "Loreal"
    },
    {
        id:"8",
      question: "Which of the following are owned by Wadia group?",
      options: ["Bombay dying", "Britannia", "Go air", "All of these"],
      answer: "Bombay dying"
    },
    {
        id:"9",
      question: "Which is the richest country in Africa?",
      options: ["Egypt", "Nigeria", "Kenya", "Morocco"],
      answer: "Kenya"
    },
    {
        id:"10",
      question: "Which of the following is bank owned by Govt of india?",
      options: ["HSBC", "HDFC", "AXIS", "IDBI"],
      answer: "IDBI"
    },
    
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handle = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 10);
      setUpdateS(updateS+10);
      localStorage.setItem("updateS",updateS);
      console.log(updateS);
      
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
          <p>Your score: {score}</p>
        </div>
      )}
      </div>
  );
};

export default CCQuiz;
