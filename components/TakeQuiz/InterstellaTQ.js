import React, { useState } from 'react';

const InterQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [updateScore2, setUpdateScore2] = useState(10);

  const quizData = [
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
      setUpdateScore2(updateScore2+10);
      localStorage.setItem("updateScore2",updateScore2);
      console.log(updateScore2);
      
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

export default InterQuiz;
