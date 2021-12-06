import MainPage from './domain/MainPage';
import {Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router exact={true} path="/" component={MainPage}/>
    </div>
  );
}

export default App;
