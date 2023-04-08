import React, {useState} from 'react';
import './FloppaQuiz.css';
import caracalpc from './images/caracalpc.jpg'; //clickable image that redirects to my github profile
import floppask from './images/floppask.png';
import {Link, useNavigate} from "react-router-dom";

type Answer = number | null;

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;

}
//questions about the caracal that will be asked on the FloppaQuizPage and its answers. 
const questions: Question[] = [
  {
    question: "1. Which one of those places is NOT part of the caracal's habitat?",
    options: ['Brazil', 'South Africa', 'The Middle East', 'Central Africa'],
    correctAnswer: 0,

  },
  {
    question: "2. At what time of day does the caracal usually hunt?",
    options: ['in the morning', 'at night', 'in the afternoon', 'depends on the day'],
    correctAnswer: 1,
  },
  {
    question: "3. How long does the average caracal live in captivity?",
    options: ['up to 10 years', 'up to 13 years', 'up to 15 years', 'up to 19 years'],
    correctAnswer: 3,
  },
  {
    question: "4. What's its scientific name?",
    options: ['Caracal floppus', 'Floppae caracalis', 'Caracal caracal', 'Floppa caracal'],
    correctAnswer: 2,
  },
  {
    question:  "5. In average, how manny kittens are born in a litter?",
    options: ['2', '3', '1', '5'],
    correctAnswer: 0 
  },
];

const FloppaQuiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answer[]>(new Array(5).fill(null));
  const [score, setScore] = useState<number>(0);

  function handleAnswerChange(questionIndex: number, optionIndex: number) {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  }
  function handleSubmit() {
    let newScore = 0;
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== null) {
        if (answerIndex === questions[questionIndex].correctAnswer) {
          newScore += 200; //correct questions are worth 200 points, meaning that the maximum score is 1000 points.
        } else {
          newScore += 0; //incorrect questions are worth no points, meaning that the minimum score is 0 points.
        }
      }
    });
    setScore(newScore)
    navigate("/results", { state: { score: newScore }});
  }

  
    return (
      <div className="screen">
        <div className='bar'>
            <div className='githcontainer'> <a href="https://github.com/vivalaclara"> 
             <img src={caracalpc} className='imggithub' alt="floppa typing" /> 
            </a> </div> 
            <div className='buttonscontainer'>  <Link to="/"> <button className='barbutton'>HOME</button></Link> <Link to={'/floppatv'}><button className='barbutton'> FLOPPA TV</button></Link>
            <Link to={'/iconicfloppa'}><button className='barbutton'> ICONIC FLOPPA</button></Link>
             </div>
            </div>
            <div className='contentcontainer'>
              <div className='quiztitle'> <img src={floppask} className='imgquiz' alt="confused floppa" /> 
              <p className='title'> FLOPPA QUIZ </p> <img src={floppask} className='imgquiz' alt="confused floppa" /> </div> </div> 
             <div className="quizcontainer">
      {questions.map((question, index) => (
        <div key={index} className='question'>
        <div className='questioncontainer'> <p>{question.question}</p> </div>
         <div className='optioncontainer'> {question.options.map((option, optionIndex) => (
          <label key={optionIndex}  className='option'>
             <input
                type="radio"
                name={`question-${index}`}
                value={optionIndex}
                checked={answers[index] === optionIndex}
                onChange={() => handleAnswerChange(index, optionIndex)}
                className="radiobtn"
              />
              {option}
            </label>  
          ))} </div>
        </div>
      ))}
      <button className="quizbtn" onClick={handleSubmit}>SUBMIT</button>
     
    </div>
            </div> )
            };

export default FloppaQuiz;