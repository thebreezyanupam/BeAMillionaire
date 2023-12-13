import { useEffect, useMemo, useState } from "react";
import "./App.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeRunOut, setTimeRunOut] = useState(false);
  const [won, setWon] = useState("$0")

  const data =
    
      [
        {
          "id": 1,
          "question": "What is the capital of France?",
          "options": [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
          ]
        },
        {
          "id": 2,
          "question": "Which programming language is React built with?",
          "options": [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Ruby", correct: false }
          ]
        },
        {
          "id": 3,
          "question": "What does HTML stand for?",
          "options": [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High-Level Text Markup Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
          ]
        },
        {
          "id": 4,
          "question": "Who is known as the 'Father of Computer Science'?",
          "options": [
            { text: "Alan Turing", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Tim Berners-Lee", correct: false },
            { text: "Ada Lovelace", correct: false }
          ]
        },
        {
          "id": 5,
          "question": "What is the largest planet in our solar system?",
          "options": [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false }
          ]
        },
        {
          "id": 6,
          "question": "Which famous scientist developed the theory of relativity?",
          "options": [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false }
          ]
        },
        {
          "id": 7,
          "question": "What is the capital of Japan?",
          "options": [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
          ]
        },
        {
          "id": 8,
          "question": "Which ocean is the largest on Earth?",
          "options": [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
          ]
        },
        {
          "id": 9,
          "question": "Who wrote the play 'Romeo and Juliet'?",
          "options": [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
          ]
        },
        {
          "id": 10,
          "question": "What is the main ingredient in guacamole?",
          "options": [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Onion", correct: false },
            { text: "Lime", correct: false }
          ]
        },
        {
          "id": 11,
          "question": "In what year did the first manned moon landing occur?",
          "options": [
            { text: "1965", correct: false },
            { text: "1969", correct: true },
            { text: "1973", correct: false },
            { text: "1981", correct: false }
          ]
        },
        {
          "id": 12,
          "question": "Who painted the Mona Lisa?",
          "options": [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
          ]
        },
        {
          "id": 13,
          "question": "What is the currency of Australia?",
          "options": [
            { text: "Dollar", correct: true },
            { text: "Euro", correct: false },
            { text: "Pound", correct: false },
            { text: "Yen", correct: false }
          ]
        },
        {
          "id": 14,
          "question": "Who invented the World Wide Web?",
          "options": [
            { text: "Bill Gates", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Steve Jobs", correct: false },
            { text: "Mark Zuckerberg", correct: false }
          ]
        }
      ];
      
  

  const moneyLadder = useMemo(()=>
    [
    {id:1, amount: "$100"},
    {id:2, amount: "$200"},
    {id:3, amount: "$400"},
    {id:4, amount: "$800"},
    {id:5, amount: "$2000"},
    {id:6, amount: "$8000"},
    {id:7, amount: "$20000"},
    {id:8, amount: "$40000"},
    {id:9, amount: "$80000"},
    {id:10, amount: "$100000"},
    {id:11, amount: "$200000"},
    {id:12, amount: "$4000000"},
    {id:13, amount: "$7000000"},
    {id:14, amount: "$10000000"},

  ].reverse(),[])
   

  useEffect(()=>{
    questionNumber >1 && setWon(moneyLadder.find(m=>m.id === questionNumber -1).amount);
  },[moneyLadder, questionNumber] )


  return (
    <div className="app">
    {username ? (
      <>
      <div className="main">
     {timeRunOut ? <h1 className="wonText">You won:{won} </h1>: (
      <>
      <div className="top">
      <div className="timer"><Timer setTimeRunOut={setTimeRunOut} questionNumber={questionNumber} /></div>
    </div>
    <div className="bottom">
      <Trivia data={data} 
      setTimeRunOut={setTimeRunOut} 
      setQuestionNumber={setQuestionNumber} 
      questionNumber ={questionNumber}

      />
    </div></>
    )}
    
    




     </div>
     <div className="ladder">
      <ul className="moneyLadder">
      {moneyLadder.map((m)=>(
        <li className={questionNumber === m.id ? "moneyPrize active": "moneyPrize"}>
       <span className="moneyListNumber">{m.id}</span>
       <span className="moneyListAmount">{m.amount}</span>
       </li>

      ))}
        
      </ul>
     </div>
      </>
    ) :<Start setUsername={setUsername}/>}
    

    </div>
  );
}

export default App;
