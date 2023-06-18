import './App.css';
import BasicExample from './TopBar';
import image from "./instaBackground.png"
import ListStore from './StoreListing';




function App() {
  return (

    <div className='App'>
          <BasicExample className='App'/>
          <hr></hr>
          <ListStore /> 
          <p><strong>Come and Save with us!</strong></p>
    </div>
  );
}

export default App;
