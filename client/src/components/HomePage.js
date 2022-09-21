import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Home.module.css'


const HomePage = ({loggedIn, setLoggedIn}) => {

  const navigate = useNavigate();
  const [btnLink, setBtnLink] = useState([]);
  const [quote, setQuote] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:8000/api/current-user', { withCredentials: true })
    .then((res) => {
      setLoggedIn(true);
      setBtnLink(['/dashboard', 'Start Tracking']);
    })
    .catch((err) => {
      setLoggedIn(false);
      setBtnLink(['/login', 'Get Started']);
      console.log(err)
    });
  },[loggedIn])

  useEffect(() => {
    fetch('https://quotes.rest/qod', {withCredentials:true})
    .then((res) => res.json())
    .then((result) => setQuote(result.contents.quotes[0]))
    .catch((err) => console.log(err))
  },[])