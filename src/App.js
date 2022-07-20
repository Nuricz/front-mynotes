import './App.scss';

import { useState, useEffect } from "react";
import NotesTemplate from './components/NotesTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getNotes } from './services';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const response = await getNotes()

      if (response.status === 200) {
        console.log(response)
        setNotes(response.data)
      }
    }

    loadNotes()
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/archive">Archive</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Active</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route 
            path="/archive"
            element={
              <NotesTemplate
                notes={notes}
                archive={true}
              />
            }/>
            <Route 
            path="/"
            element={
              <NotesTemplate
                archive={false}
              />
            }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
