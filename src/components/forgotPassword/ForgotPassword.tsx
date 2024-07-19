import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className='forgot-password'>
      <div className='card'>
        <p className='card-title'>Reset your password</p>
        <form className='form'>
          <input className='username' type='text' placeholder='Enter your email' />
          <Link to='/'>
            <button className='login-button'>Send reset link</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
