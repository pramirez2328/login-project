import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './NewAccount.css';
function NewAccount() {
  const [newUser, setNewUser] = useState({ name: '', lastName: '', email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleNewUser = (e) => {
    e.preventDefault();
    console.log(newUser);
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

          <button className='create-account-button'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
