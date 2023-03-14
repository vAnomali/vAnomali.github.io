import React from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Navigation from './navigation/Navigation'
import Styles from './AppStyles'

function App() {
  return (
    <div className="App">
      	<Router>
			<div className='App'>
        <Styles.AppContainer>
          <Navigation/>
        </Styles.AppContainer>
        <Link to={'/home'}>Home</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/research'}>Research</Link>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/contact'}>Contact</Link>
        <div className='content'>
          {/* Define routes within the website */}
          <Routes>
            <Route path='/home' element={<p>Home2</p>}/>
            <Route path={'/projects'} element={<p>Project2</p>}/>
            <Route path={'/research'} element={<p>Research2</p>}/>
            <Route path={'/resume'} element={<p>Resume2</p>}/>
            <Route path={'/contact'} element={<p>Contact2</p>}/>
          </Routes>
        </div>
			</div>
		</Router>
    </div>
  );
}

export default App;