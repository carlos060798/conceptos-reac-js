import {create}  from 'zustand';
import { QuizQuestion } from '../types/question';

type  state = {
    questions: QuizQuestion[];
    currentQuestioncorrect: number;
    fechQuestions: (limit:number) => Promise<void>;
    selectanswer: (questionId:number,questionIndex:number) => void;
}


/**
 * Custom hook to manage the quiz state.
 * 
 * @typedef {Object} State
 * @property {Array} questions - Array of quiz questions.
 * @property {number} currentQuestioncorrect - Index of the current correct question.
 * @property {Function} fechQuestions - Asynchronous function to fetch questions from a JSON file.
 * @property {Function} selectanswer - Function to select an answer for a question.
 * 
 * @function useQuizStore
 * @param {Function} set - Function to update the state.
 * @param {Function} get - Function to get the current state.
 * @returns {State} The state of the quiz.
 * 
 * @example
 * const { questions, currentQuestioncorrect, fechQuestions, selectanswer } = useQuizStore();
 * 
 * // Fetch questions with a limit of 10
 * fechQuestions(10);
 * 
 * // Select an answer for a question
 * selectanswer(1, 2);
 */
const  useQuizStore= create<state>((set,get) => ({
    questions: [],
    currentQuestioncorrect: 0,
    fechQuestions: async (limit) => {
    const response = await fetch('http://localhost:5173/data.json');
    const data = await response.json();
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    set({questions});
    },
    selectanswer: (questionId:number , answerindex:number) => {
        
        const {questions}= get()
       const newQuestions= structuredClone(questions);
       const questionIndex = newQuestions.findIndex((question) => question.id === questionId);
       const questioninfo= newQuestions[questionIndex];
       const isquestionCorrect= questioninfo.correctAnswer === answerindex;

       newQuestions[questionIndex]= {
        ...questioninfo,
        isCorrectUserAnswer:isquestionCorrect,
        userSelectedAnswer: answerindex
       }
       

    }
}));

export default useQuizStore;