import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className='right-section'>
      <div className='card'>
        <p className='card-title'>Reset your password</p>
        <form className='form'>
          <input className='username' type='text' placeholder='Email or phone number' />
          <Link to='/'>
            <button className='login-button'>Send reset link</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
