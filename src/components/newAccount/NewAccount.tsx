import './NewAccount.css';
function NewAccount() {
  return (
    <div id='new-account'>
      <div className='card'>
        <p className='card-title'>Create a new account</p>
        <form className='form'>
          <input className='username' type='text' placeholder='First name' />
          <input className='username' type='text' placeholder='Last name' />
          <input className='username' type='text' placeholder='Email' />
          <input className='password' type='password' placeholder='Password' />
          <button className='create-account-button'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
