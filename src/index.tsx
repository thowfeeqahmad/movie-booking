import { Button, Card, CardFooter, CardImg, Form, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IMAGES } from './constants';
import { GrMenu } from "react-icons/gr";
import { IconType } from 'react-icons';
import icon from './constants/icon';

interface MoviesModel {
  thumbnaill: string,
  ratingIcon: IconType,
  ratingPercentage: string,
  movieName: string,
  category: string
}

function Home() {

  const movie: MoviesModel[] = [
    { thumbnaill: IMAGES.Card_Img4, ratingIcon: icon.RatingStar, ratingPercentage: "9/10", movieName: "Mr & Mrs Mahi", category: "Love/Action" },
    { thumbnaill: IMAGES.Card_Img1, ratingIcon: icon.RatingStar, ratingPercentage: "3/10", movieName: "Aranmanai-4", category: "Horror/Thriller" },
    { thumbnaill: IMAGES.Card_Img2, ratingIcon: icon.RatingStar, ratingPercentage: "5/10", movieName: "Hit list", category: "Thriller/Action" },
    { thumbnaill: IMAGES.Card_Img3, ratingIcon: icon.RatingStar, ratingPercentage: "7/10", movieName: "PT sir", category: "Sports/Action" },
    { thumbnaill: IMAGES.Card_Img, ratingIcon: icon.RatingStar, ratingPercentage: "7.3/10", movieName: "Garudan", category: "Action/Thriller" },
    
  ]

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
          <Navbar className=' gap-3 justify-content-start mt-1 '  >
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
              <NavLink><small>GiftCards</small></NavLink>
            </div>
          </Navbar>
        </div>
      </Container>

      <Container>
        <div>
          <h4></h4>
        </div>
      </Container>

     <Container className='d-flex gap-3 mt-5'>
        {
          movie.map((data, index) => (
            <Card style={{ width: '17rem' }} key={index}>
              <Card.Img src={data.thumbnaill} />
              <CardFooter className='bg-dark text-white'>
                {<data.ratingIcon color="#fd395d"/>}
                <text>{data.ratingPercentage}</text>
              </CardFooter>
              <div>
                <h5 className='mt-3 ms-2'>{data.movieName}</h5>
                <div>
                  <h6 className='text-secondary ms-2'>{data.category}</h6>
                </div>
              </div>
            </Card>
          ))
        }
        </Container>

     
      <Container>
        <Card className='mt-5'>
          <CardImg
            src={IMAGES.Banner} />
        </Card>
      </Container>

    </Container>

  );
}


export default Home;


