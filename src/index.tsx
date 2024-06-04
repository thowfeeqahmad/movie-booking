import { Button, Card, Form, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IMAGES } from './constants';
import { GrMenu } from "react-icons/gr";

function Nothing() {

  return (
    <Container fluid>
      <Container fluid>
        <Navbar expanded className='d-flex gap-4 justify-content-center'>

          <Navbar.Brand>
            <img src={IMAGES.Business_Logo} alt="" />
          </Navbar.Brand>

          <Form className='w-50'>
            <Form.Control
              type='search'
              placeholder='search for movies,Events,Plays,Sports and Activities'
            >
            </Form.Control>
          </Form>
          <Form>
            <Form.Select as={'select'}>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Coimbatore</option>
              <option>Coimbatore</option>
            </Form.Select>
          </Form>
          <Button className='bg-danger'>
            Sign in
          </Button>
          <GrMenu size={30} />
        </Navbar>
      </Container>
      <Container fluid style={{ backgroundColor: '#F5F5F5' }}>
        <div className='mx-5 ms-5'>
          <Navbar className=' gap-3 justify-content-start mt-3 '  >
            <NavLink><small>Movies</small></NavLink>
            <NavLink ><small>Stream</small></NavLink>
            <NavLink ><small>Events</small></NavLink>
            <NavLink><small>Plays</small></NavLink>
            <NavLink><small>Sports</small></NavLink>
            <NavLink><small>Activities</small></NavLink>
            <div className='d-flex ms-5 me-0 gap-3'>
              <NavLink><small>ListYourShow</small></NavLink>
              <NavLink><small>Corporates</small></NavLink>
              <NavLink><small>Offers</small></NavLink>
              <NavLink><small>GiftCards</small></NavLink>
            </div>
          </Navbar>
        </div>
      </Container>


      <Container style={{ width: '180rem' }} className='d-flex mt-5 gap-3 justify-content-center'>

        <Card style={{ width: '15rem' }}>
          <Card.Img src={IMAGES.Card_Img1} />

        </Card>
        <Card>
          <Card.Img variant="top" src={IMAGES.Card_Img2} />
        </Card>
        <Card>
          <Card.Img variant="top" src={IMAGES.Card_Img3} />
        </Card>
        <Card>
          <Card.Img variant="top" src={IMAGES.Card_Img4}
          />
        </Card>
        <Card>
          <Card.Img variant="top" src={IMAGES.Card_Img4}
          />
        </Card>
        <Card>
          <Card.Img variant="top" src={IMAGES.Card_Img4}
          />
        </Card>
      </Container>
    </Container>
  );
}


export default Nothing;
