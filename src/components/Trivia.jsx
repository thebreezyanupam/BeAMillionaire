import { useEffect, useState } from "react"
import useSound from "use-sound";
import "../App.css"
import play from '../assets/play.mp3'
import wrong from '../assets/wrong.mp3'
// import wait from '../assets/wait.mp3'
import correct from '../assets/correct.mp3'
export default function Trivia({
    data, 
    setTimeRunOut, 
    setQuestionNumber, 
    questionNumber
}) {
    const[question, setQuestion] = useState(null);
    const [selectedAnswer, setselectedAnswer] = useState(null);
    const [ className, setClassName] = useState("options");
    const [letsPlay] = useSound(play)
    const [correctAns] = useSound(correct)
    const [wrongAns] = useSound(wrong)

    useEffect(()=>{
        letsPlay();


    },[letsPlay]);

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data, questionNumber]);

    const delay =(duration, callback)=>{
        setTimeout(()=>{
            callback();
        }, duration);

    }

    const handleClick = (a) => {
        setselectedAnswer(a);
        setClassName("options active");
        delay(3000,()=>{
        setClassName(a.correct ? "options correct" : "options wrong");
    });
    delay(5000,()=>{
        if(a.correct){
            correctAns();
            delay(2000,()=>{
                setQuestionNumber((prev)=> prev +1);
            setselectedAnswer(null);

            });
            
        }
        else{
            wrongAns();
            delay(2000, ()=>{
                setTimeRunOut(true);
            });
            
        }
    });

       

};

  return (
    <div className="trivia">
    <div className="questions">{question?.question}</div>
    <div className="answers">
        {question?.options.map((a)=>(
            <div className={selectedAnswer === a ? className : "options"} onClick={()=>handleClick(a)}>{a.text}</div>
        ))}
        
    </div>
      
    </div>
  )
}
