import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailValidation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
    } else {
      alert('If the email is valid, a reset link will be sent to your email');
      navigate('/');
    }
  };

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
