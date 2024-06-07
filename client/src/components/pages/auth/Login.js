import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as loginRedux } from '../../../store/userSlice';
import { login } from '../../../functions/auth';
import { MdEmail } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Login.css'; // Assuming you copied your friend's CSS file

const defaultTheme = createTheme();

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formrgt = {
      name: data.get('name'),
      password: data.get('password'),
    };

    login(formrgt)
      .then((res) => {
        console.log(res);
        alert(res.data);
        dispatch(
          loginRedux({
            name: res.data.payload.user.name,
            role: res.data.payload.user.role,
            token: res.data.token,
          })
        );
        localStorage.setItem('token', res.data.token);
        roleRedirects(res.data.payload.user.role);
      })
      .catch((err) => console.log(err));
  };

  const roleRedirects = (role) => {
    if (role === 'admin') {
      navigate('/admin/index');
    } else {
      navigate('/user/index');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="login">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="name" placeholder="Username" required />
              <i><MdEmail /></i>
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" required />
              <i><IoIosLock /></i>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;
