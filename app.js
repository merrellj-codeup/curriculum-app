import react from 'https://cdn.skypack.dev/react';
import reactDom from 'https://cdn.skypack.dev/react-dom';
import {
    BrowserRouter,
    Route,
    Link
  } from 'https://cdn.skypack.dev/react-router-dom';
  
  const App = () => (
    <div>
      <h1>React Router Example</h1>
      <ul role="nav">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
       
      <div>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  )
   
  const Dashboard= () => <h2>You are in the Dashboard</h2>
  const Profile= () => <h2>You are in the Profile</h2>
  
  
  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), document.getElementById('root'));