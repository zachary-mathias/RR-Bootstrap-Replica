import Container from 'react-bootstrap/container'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Image from 'react-bootstrap/Image'

function ListStore() {
  return (
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image className='images' src="https://s3-media0.fl.yelpcdn.com/bphoto/TkwTPwuZ0yao0XgEKYbuog/1000s.jpg"  roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image className='images' src="https://about.sprouts.com/wp-content/uploads/2017/09/Laveen-Grand-Opening-13-1024x683.jpg" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image className='images' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/200px-Kroger_logo_%281961-2019%29.svg.png" roundedCircle />
            </Col>
            <Col xs=".5">
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
)}

export default ListStore