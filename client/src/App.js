import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path={'/'} element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/about'} element={<About setLoggedIn={setLoggedIn} />} />
          <Route path={'/dashboard/'} element={<GoalDashboard setLoggedIn={setLoggedIn} />} />
          <Route path={'/goal/add/:category'} element={<GoalAdd setLoggedIn={setLoggedIn} />} />
          <Route path={'/goal/edit/:category/:id'} element={<GoalUpdate setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
