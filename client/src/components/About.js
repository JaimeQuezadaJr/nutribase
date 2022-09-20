import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const About = ({setLoggedIn}) => {

  const navigate = useNavigate();
  const [btnLink, setBtnLink] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:8000/api/current-user', { withCredentials: true })
    .then((res) => {
      setLoggedIn(true);
      setBtnLink(['/dashboard', 'Start Tracking']);
    })
    .catch((err) => {
      setBtnLink(['/login', 'Get Started']);
      console.log(err)
    });

  },[])