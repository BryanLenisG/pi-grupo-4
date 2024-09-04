import './App.css'
import LoginSingUp from './LoginSingUp';
import Logo from './assets/Logo.png'
function App() {
  return (
    <>
    <div className='Title-Container'>
      <img src={Logo} alt='Title' style={{ width: '400px', height: '400px' }} />
    </div>
    <LoginSingUp />
    </>
    
  );
};
export default App;