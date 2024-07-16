import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='right-section'>
      <div className='card'>
        <p className='card-title'>Sign in to your account</p>
        <form className='form'>
          <input className='username' type='text' placeholder='Email or phone number' />
          <input className='password' type='password' placeholder='Password' />
          <button className='login-button'>Login</button>
        </form>
        <Link to='/forgot_password'>
          <p className='forgot-password'>Forgot password?</p>
        </Link>
        <hr />
        <Link to='/new_account'>
          <button className='create-account'>Create New Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
