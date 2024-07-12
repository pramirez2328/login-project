interface NewUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const validation = (newUser: NewUser, confirmPassword: string): string => {
  const { name, lastName, email, password } = newUser;

  if (!name || !lastName || !email || !password) {
    return 'Please fill all the fields';
  }

  if (name.length < 3 || lastName.length < 3) {
    return 'Name and last name must be at least 3 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match!';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }

  const hasNumber = /\d/;
  if (!hasNumber.test(password)) {
    return 'Password must contain at least one number';
  }

  const hasLetter = /[a-zA-Z]/;
  if (!hasLetter.test(password)) {
    return 'Password must contain at least one letter';
  }

  const hasSpecialChar = /[!@#$%^&*]/;
  if (!hasSpecialChar.test(password)) {
    return 'Password must contain at least one special character';
  }

  const validPasswordChars = /^[a-zA-Z0-9!@#$%^&*]+$/;
  if (!validPasswordChars.test(password)) {
    return 'Password must contain only letters, numbers, and special characters';
  }

  return 'valid';
};
