import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUp from '../popup/PopUp';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const navigate = useNavigate();

  const handleEmailValidation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setValidEmail(true);
    }
  };

  if (validEmail) {
    return <PopUp message='A password reset link has been sent to your email' />;
  }

  return (
    <div className='forgot-password-container'>
      <div className='card'>
        <p className='card-title'>Reset your password</p>
        <form className='form' onSubmit={handleEmailValidation}>
          <input
            className='username'
            type='text'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className='reset-password login-button'>Send reset link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
