

import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { QuizQuestion } from '../types/question';
import  Syntaxhighlighter  from 'react-syntax-highlighter';
import  {gradientDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
type  propsQuestion = {
    info: QuizQuestion;
}
export  function  Question({info}: propsQuestion) {
    return (
       <Card variant="outlined" sx={{bgcolor:'#222', p:2,textAlign:'left' }}>
              <Typography variant="h6" sx={{color:'#fff'}}>
                {info.question}
              </Typography>
              <Syntaxhighlighter language="javascript" style={gradientDark}>
                {info.code}
              </Syntaxhighlighter>

              <List sx={{color:'#fff',textAlign:'center'}} disablePadding>
                {info.answers.map((answer, index) => (
                  <ListItem key={index} disablePadding divider>
                    <ListItemButton>
                    <ListItemText primary={answer} sx={{textAlign:'center'}} />
                    </ListItemButton>
                  </ListItem>
                ))}
                </List>
       </Card>
    );
}