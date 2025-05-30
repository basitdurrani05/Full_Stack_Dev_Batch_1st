import { useState } from 'react';
import './App.css';


function App() {

  // Hooks

  const [count,SetCount] = useState(0);    // Count = 0

  // Program Logic

  const Increment = () => SetCount(count+1);  // Count = 0 , count+1 1
  const Decrement = () => SetCount(count-1);


  return (
    <>

    <h1>Instagram Post {count}</h1>

    <img src='https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy_1366789715.coreimg.100.1024.png/1693924413857/5-hp-grandpre-refresh-phoenix-sm.png'/>



    <button onClick={Increment}>Like</button>

    <button onClick={Decrement}>DisLike</button>








    
    </>
  );
}

export default App;
