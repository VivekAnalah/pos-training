import logo from './logo.svg';
import './App.css';
import TimerComponent from './Components/PosTraining';
import PPTViewer from './Components/PPTViewer';
import Timer from './Components/PospTimer';
import Timer2 from './Components/PospTimer2';
import Timer3 from './Components/PospTimer3'; 

function App() {
  return (
    <>
    
     {/* < TimerComponent />  */}
    
     <Timer3 />
    <Timer2 />
    < Timer /> 

    < PPTViewer />
    
    </>
  );
}

export default App;
