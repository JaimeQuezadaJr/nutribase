import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';
import styles from './Header.module.css';

const Header = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
    
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, [loggedIn])

  const onLogOut = () => {
    axios
    .post('http://localhost:8000/logout',{}, { withCredentials: true })
    .then((res) => {
        console.log(res.data);
        setUser(null);
        setLoggedIn(false);
        navigate('/')
    })
    .catch((err) => console.log(err));
  };