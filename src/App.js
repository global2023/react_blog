// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'yoshi', age: 30};
  const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path = "/"> 
                <Home />
            </Route>
            <Route path = "/create"> 
                <Create/>
            </Route>
            <Route path = "/blogs/:id"> 
                <BlogDetails/>
            </Route>
            <Route>
              <NotFound path = '*'>

              </NotFound>
            </Route>
          </Switch>
        </div>
        {/* <p>Liked {likes} times</p> */}
        {/* <p>{person}</p>*/}
        {/* <p>{10}</p>
        <p> {'hello, word'}</p>
        <p>{[12,3,4]}</p>
        <p>{Math.random() * 10 }</p>
        <a href={link}>Googlesite</a> */}
      </div>
    </Router>

  );
}

export default App;
