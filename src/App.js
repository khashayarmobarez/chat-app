import './App.css';
import { Routes, Route} from 'react-router-dom'

// components
import Login from './components/Login';
import Chats from './components/Chats';
import AuthContextProvider from './contexts/AuthContextProvider';
import './App.css'


// first step, install:
// npm i axios
// npm i react-router-dom
// npm i react-chat-engine
// npm i firebase (in this project the version is 8.7.2)

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/chats' element={<Chats/> } />
          <Route path='/login' element={<Login /> } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
