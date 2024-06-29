import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewAccount.css';

interface NewUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const handleValidation = (obj: NewUser, confirmPassword: string): string => {
  const { name, lastName, email, password } = obj;
  if (name === '' || lastName === '' || email === '' || password === '') {
    return 'Please fill all the fields';
  } else if (name.length < 3 || lastName.length < 3) {
    return 'Name and last name must be at least 3 characters';
  } else if (
    email.indexOf('@') === -1 ||
    email.indexOf('.') === -1 ||
    email.indexOf('@') > email.indexOf('.') ||
    !email.includes('com')
  ) {
    return 'Invalid email';
  } else if (password !== confirmPassword) {
    return 'Passwords do not match!';
  } else if (password.length < 8) {
    return 'Password must be at least 10 characters';
  } else if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  } else if (!/[a-zA-Z]/.test(password)) {
    return 'Password must contain at least one lowercase or uppercase letter';
  } else if (!/[!@#$%^&*]/.test(password)) {
    return 'Password must contain at least one special character';
  } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
    return 'Password must contain only letters, numbers and special characters';
  } else {
    return 'valid';
  }
};

function NewAccount() {
  const [newUser, setNewUser] = useState({ name: '', lastName: '', email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid: string = handleValidation(newUser, confirmPassword);
    if (isValid === 'valid') {
      navigate('/');
    } else {
      setError(isValid);
    }
  };
  return (
    <div id='new-account'>
      <div className='card'>
        <p className='card-title'>Create a new account</p>
        <form className='form' onSubmit={handleNewUser}>
          <input
            className='new-user-input'
            type='text'
            placeholder='First name'
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            className='new-user-input'
            type='text'
            placeholder='Last name'
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <input
            className='new-user-input'
            type='text'
            placeholder='Email'
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            className='new-user-input'
            type='password'
            placeholder='Password'
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <input
            className='new-user-input'
            type='password'
            placeholder='Re enter-Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className='error-message'>{error}</p>

          <button className='create-account-button'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
