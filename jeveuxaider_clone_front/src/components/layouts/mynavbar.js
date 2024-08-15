
import React  from 'react'
import { Navbar, Container, Nav,  } from 'react-bootstrap';
import {  Search, Calendar, PersonFill } from 'react-bootstrap-icons';



 function Mynavbar()  {
     const logo_franacais = "https://www.envoludia.org/wp-content/uploads/2020/03/1200px-Republique-francaise-logo.svg_.png";
     const jeveux_aider = "https://th.bing.com/th/id/OIP.3GAtevkKMzbtvzrMDTxVKQAAAA?rs=1&pid=ImgDetMain";
     const mycolor = {
         color: 'navy',
         fontWeight: 'bold',
         margin: '20px',
         fontSize:'10pt',
         
     }
     const PersonStyle = {
         color: 'navy',
         fontWeight: 'bold',
         margin: '20px',
         border: '1px solid #ddd',
         fontSize:'10pt',
         
     }
    return (
  
    <Navbar expand="lg" className="bg-body-second">
      <Container>
                <Navbar.Brand href="#home">
                    <img
              src={logo_franacais}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="franais logo"
                    />

            <img 
              src={jeveux_aider}
              width="250"
              height="150"
              
              className="d-inline-block align-top ml-4"
              alt="franais logo"
                    />   
                </Navbar.Brand>
                
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{borderBotton:"1px solid red"}}>
          <Nav className="m-auto justify-content-right" >
                <Nav.Link href="#home" style={mycolor}><Search style={{margin:"5px"}}/>  Trouver une mission</Nav.Link><Nav.Link href="#link" style={mycolor}><Calendar style={{ margin: "5px" }} />  Publier une mission </Nav.Link>
                <Nav.Link href="#link" style={PersonStyle}><PersonFill style={{ margin: "5px" }} />  Mon compte </Nav.Link>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
  
}

export default Mynavbar
