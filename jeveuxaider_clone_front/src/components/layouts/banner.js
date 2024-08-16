import React  from 'react'
import {Col, Container, Row,  } from 'react-bootstrap';



function Banner() {
    const styleBanner = {
        margin: "15px",
        padding: "10px",
        Border: "1px solid #ddd",
        textDecoration: "none",
        color: "black",
        
        
    }
    
    return (
        <>
            <Container>
                <Row className="justify-content-left text-bold">
                    <Col lg={8} md={8} style={styleBanner}>
                        <a href="#" style={styleBanner}>Bénevolat près de chez moi</a>
                        <a href="#" style={styleBanner}>A distance</a>
                        <a href="#" style={styleBanner}>En ce moment</a>
                        <a href="#" style={styleBanner}>Associations</a>
                        <a href="#" style={styleBanner}>Centre d'aide</a>
                    </Col>
                    
                </Row>
               
            </Container>

        </>
    )
}
export default Banner
