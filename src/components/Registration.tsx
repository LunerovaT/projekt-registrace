import { useState, ChangeEvent, FormEvent } from 'react';
import './registration.css';

interface UserData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration = () => {
  const [user, setUser] = useState<UserData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // Funkce pro změnu hodnot ve formuláři
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };

      // Automatické vyplnění username podle emailu
      if (name === 'email' && value.includes('@') && prevUser.username === '') {
        const namePart = value.split('@')[0];
        updatedUser.username = namePart;
      }

      return updatedUser;
    });
  };

  // Odeslání formuláře
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('User data:', user);
  };

  // JSX formulář
  return (
    <div className="registration-container">
      <div className="form-card">
        <div className="icon-wrapper">
          <div className="icon-circle">
            <span role="img" aria-label="user">
              👤
            </span>
          </div>
        </div>

        <h1>Registrace</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              value={user.passwordConfirm}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};
