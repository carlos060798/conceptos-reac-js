import useQuizStore from "../store/question-store";
import { Question } from "./question";

function GameHome() {
    const { questions,currentQuestioncorrect} = useQuizStore();
    return ( <>

    <Question info={questions[currentQuestioncorrect]} />
       
    </> );
}

export default GameHome;