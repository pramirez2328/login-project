import './Login.css';
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
        <p className='forgot-password'>Forgot password?</p>
        <hr />
        <button className='create-account'>Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
