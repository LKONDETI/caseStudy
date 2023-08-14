import React, { useState } from 'react';

const Questions = () => {
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
  const harry =[
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

const inter
 = [
    { 
        id:"1",
      question: "What language is the dust pattern in Murph's room written it??",
      options: ["Binary", "Secondary", "Primary", "Teretary"],
      answer: "Binary"
    },
    {
        id:"2",
      question: "Where do the coordinates lead Cooper and Murph to??",
      options: ["Tom cruise", "Nasa", "Jonny Depp", "Brad Pitt"],
      answer:"nasa" 
    },
    {
        id:"3",
      question: "What was discovered near Saturn?",
      options: ["2", "3", "5", "Wormhole"],
      answer: "Wormhole"
    },
    {
        id:"4",
      question: "What is the name of the mission that sent 12 astronauts to different planets?",
      options: ["Albus Dumbledore", "Severus Snape", "Lazarus", "Tom Riddle"],
      answer: "Lazarus"
    },
    {
        id:"5",
      question: "How long does 1 hour on the planet above equal on Earth?",
      options: ["9", "7", "12", "13"],
      answer: "7"
    },
    {
        id:"6",
      question: "What does Cooper give Murph before he leaves?",
      options: ["Petunia", "Daisy", "Rose", "watch"],
      answer: "watch"
    },
    {
        id:"7",
      question: "What is the problem Dr. Brand needs to solve??",
      options: ["gravity", "Mouse", "Cat", "Bat"],
      answer: "gravity"
    },
    {
        id:"8",
      question: "Who is the real 'ghost'?",
      options: ["cooper", "Blue and bronze", "Blue and gold", "Blue and black"],
      answer: "cooper"
    },
    {
        id:"9",
      question: "Where does the wormhole lead?",
      options: ["Bowman Wright", "into another galaxy", "Fred and George Weasley", "Albus Dumbledore"],
      answer: "into another galaxy"
    },
    {
        id:"10",
      question: "How long will it take to get to Saturn?",
      options: ["Three years", "Two years", "Twelve years", "Nine years"],
      answer: "Nine"
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

export default Questions;
