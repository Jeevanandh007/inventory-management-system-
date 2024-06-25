import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/authActions';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  return (
    auth.isAuthenticated
      ? <Redirect to={{ pathname: '/login' }} />
      : <div className='container mt-5' style={{ maxWidth: '400px' }}>
        <h2 className='text-success'>Sign Up</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className='text-primary'>Username</label>
            <input
              type="text"
              name="username"
              className="form-control border-info"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className='text-primary'>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control border-info"
              aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We respect your privacy.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='text-primary'>Password</label>
            <input
              type="password"
              name="password"
              className="form-control border-info"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info btn-block">Register</button>
        </form>
        <Link className="btn btn-secondary btn-sm mt-4" to="/">&larr; Back to Home</Link>
      </div>
  );
};

export default Register;
