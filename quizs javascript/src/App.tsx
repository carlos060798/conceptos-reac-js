
import { Container, Stack } from '@mui/material'
import './App.css'
import { Javascript } from '@mui/icons-material'
import StartHome from './componets/starthome'
import useQuizStore from './store/question-store';
import GameHome from './componets/game';

function App() {

  const {questions}=useQuizStore()
  console.log(questions)
 

  return (
    <>
    <Container  maxWidth="sm">
      <Stack  direction="row" gap={2} alignItems={'center'} justifyContent={"center"}>
        <Javascript fontSize="large" />
        <h1>Quizs JavaScript</h1>    
     </Stack>
     { questions.length > 0 ? <GameHome /> : <StartHome /> } 
    </Container>
      
    </>
  )
}

export default App
