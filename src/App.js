import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, useNavigate, Route } from "react-router";
import Details from './pages/details';
import Contacts from './pages/contactus';
import Login from './pages/login';
import Logistics from './pages/logistics';
import Participants from './pages/participants';
import Register from './pages/register';
import Table from 'react-bootstrap/Table';
import { faViacoin } from '@fortawesome/free-brands-svg-icons';
import uni from './assets/uni.jpeg'
import logo_uni from './assets/logo_uni.jpg'
import fnr_logo from './assets/fnr_logo.gif'
import Banana_man2 from './assets/anatole.jpg'
import Banana_man from './assets/gabor3.jpeg'
import Banana_Man3 from './assets/klaus3.png'
import Jorg from './assets/jorg.jpeg'
import AlexT from './assets/AlexT.png'
import DropboxGUI from './pages/dropbox_gui';
import { useState } from 'react';
/*import Map from './Map';*/


function App() {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar expand='lg' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TEA 2023</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/'); }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/details'); }}>Details</Nav.Link>
            <Nav.Link onClick={() => { navigate('/logistics'); }}>Location</Nav.Link>
            <Nav.Link onClick={() => { navigate('/participants'); }}>Participants</Nav.Link>
            <Nav.Link onClick={() => { navigate('/login'); }}>Data/Login</Nav.Link>
            <Nav.Link onClick={() => { navigate('/register'); }}>Register</Nav.Link>
            <Nav.Link onClick={() => { navigate('/contact_us'); }}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className="main-bg">
            {/* <div className={}>
            <img src={uni} alt="pic_header"/>
            </div> */}
            <h2 className='centered'>
              <font color={'brown'}>
              TEA 2023
              </font>
            </h2>
          </div>
          <h2 className='marginer'>Crash TEsting machine learning force fields: Applicability, best practices, limitations</h2>
          <p className='marginer' style={{fontSize: "18px"}}>The Workshop “Crash TEsting machine learning force fields: Applicability, best practices, limitations" (a.k.a TEA) brings together experts in machine learning force fields (MLFF) from 23-25 October 2023. The workshop will define the state of the art in the area, establish best-practice applications for different MLFF architectures, draft existing challenges, and discuss ways of resolving them. </p>
          <hr
            style={{
              background: 'blue',
              color: 'blue',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          <h2>Featured participants</h2>
          <hr
            style={{
              background: 'blue',
              color: 'blue',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          <Table className={"table"}>
            <thead>
              <tr className='table_details'>
              <th className='table_details'>
                <img style={{ width: 150, height: 150}} src={Banana_man}/>
                </th>
                <th className='table_details'>
                <img style={{ width: 150, height: 150}} src={Banana_man2}/>
                </th>
                <td className='table_details'>
                <img style={{ width: 150, height: 150}} src={Banana_Man3}/>
                </td>
                <th className='table_details'>
                  <img style={{ width: 150, height: 150}} src={AlexT}/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='table_details'>
                <td className='table_details'>Gábor Csányi</td>
                <td className='table_details'>O. Anatole von Lilienfeld</td>
                <td className='table_details'>Klaus-Robert Müller</td>
                <td className='table_details'>Alexandre Tkatchenko</td>
              </tr>
              <tr className='table_details'>
                <td className='table_details'>University of Cambridge</td>
                <td className='table_details'>University of Toronto</td>
                <td className='table_details'>
                  Technical University of Berlin
                </td>
                <td className='table_details'>University of Luxembourg</td>
              </tr>
            </tbody>
          </Table>

          <h2>Sponsors</h2>
          <p style={{fontSize: "18px"}}>We would like to acknowledge and thank our sponsors for the TEA2023 workshop. Klaus Robert Müller image is copyright property of © Leopoldina.</p>
          <Table className={"table"}>
            <tbody>
              <tr className='table_details'>
                <th className='table_details'>
                  <img style={{ width: 100, height: 100}} src={logo_uni} />
                </th>
                <th className='table_details'>
                  <img style={{ width: 180, height: 100}} src={fnr_logo} />
                </th>
              </tr>
            </tbody>
          </Table>
          <hr
            style={{
              background: 'blue',
              color: 'blue',
              borderColor: 'pink',
              height: '3px',
            }}
          />

        </div>
        }></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/logistics" element={<Logistics />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact_us" element={<Contacts />}></Route>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          {loggedIn ? (
            <Route path="/data_page" element={<DropboxGUI />} />
          ) : (
            <Route path="/data_page" element={<div>You need to be logged in to access this page.</div>} />
          )}
      </Routes>

      
          
    </div>
  );
}

export default App;
