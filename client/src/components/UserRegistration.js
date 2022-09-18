import { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UserRegistration = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/register', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLoggedIn(true);
        navigate('/dashboard');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };