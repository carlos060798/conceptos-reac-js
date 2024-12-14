import { Button } from "@mui/material";
import useQuizStore from "../store/question-store";
import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

function StartHome() {
const [limit, setLimit] = useState(5);
    const {fechQuestions}=useQuizStore()

    const handleStart = async () => {
        await fechQuestions(limit);
    }


    return ( 
        <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{ padding: 3, maxWidth: 400, margin: 'auto', textAlign: 'center' }}
    >
      <Typography variant="h4" gutterBottom>
        Seleccione la cantidad de preguntas
      </Typography>
      <TextField
        type="number"
        label="Cantidad de preguntas"
        variant="outlined"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleStart} fullWidth>
        Comenzar
      </Button>
    </Box>
    )
}

export default StartHome;