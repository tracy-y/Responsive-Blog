import {Button, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

function App() {
  return (
    <div className="App">
      <Typography align="center" variant="h1" color={"tomato"}>
  h1. Heading
</Typography>
     <Button endIcon={<FacebookIcon />} variant="outlined" color="error">Beautiful</Button>
    </div>
  );
}

export default App;
