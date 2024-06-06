import { Badge, Button, Card, CardFooter, CardImg, Form, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IMAGES } from './constants';
import { GrMenu } from "react-icons/gr";
import { IconType } from 'react-icons';
import icon from './constants/icon';
import { FaCirclePlay } from "react-icons/fa6";



// interfaces starting######
interface MoviesModel {
  thumbnaill: string,
  ratingIcon: IconType,
  ratingPercentage: string,
  movieName: string,
  category: string
}

interface EventsModel {
  poster: string,
}

interface CardsModel {
  cardimg: string,
  movieName2: string,
  lang: string
  isTrue?: boolean;

}


//interfaces ending#########


function Home() {


  //thumbnais starting
  const movie: MoviesModel[] = [
    { thumbnaill: IMAGES.Card_Img, ratingIcon: icon.RatingStar, ratingPercentage: "9/10", movieName: "Mr & Mrs Mahi", category: "Love/Action" },
    { thumbnaill: IMAGES.Card_Img1, ratingIcon: icon.RatingStar, ratingPercentage: "3/10", movieName: "Aranmanai-4", category: "Horror/Thriller" },
    { thumbnaill: IMAGES.Card_Img2, ratingIcon: icon.RatingStar, ratingPercentage: "5/10", movieName: "Hit list", category: "Thriller/Action" },
    { thumbnaill: IMAGES.Card_Img3, ratingIcon: icon.RatingStar, ratingPercentage: "7/10", movieName: "PT sir", category: "Sports/Action" },
    { thumbnaill: IMAGES.Card_Img4, ratingIcon: icon.RatingStar, ratingPercentage: "7.3/10", movieName: "Garudan", category: "Action/Thriller" },
    //thumbnails End
  ]


  //posters strating
  const event: EventsModel[] = [
    { poster: IMAGES.P1 },
    { poster: IMAGES.P2 },
    { poster: IMAGES.P3 },
    { poster: IMAGES.P4 },
    //posters ending 


  ]
  const cntblack: CardsModel[] = [
    { cardimg: IMAGES.B5, movieName2: "GhostBusters", lang: "Hindi/English",isTrue: true},
    { cardimg: IMAGES.B2, movieName2: "Endeavour", lang: "Tamil/English",isTrue: true},
    { cardimg: IMAGES.B3, movieName2: "Skins", lang: "Malayalam/English",isTrue: true},
    { cardimg: IMAGES.B4, movieName2: "Jules", lang: "English",isTrue: true},
    { cardimg: IMAGES.B1, movieName2: "The Boys", lang: "Tamil",isTrue: true}

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
            </div>
          </Navbar>
        </div>
      </Container>


      <Container>
        <div>
          <h4 className='mt-5'>Recommended Movies</h4>
        </div>
      </Container>

      <Container className='d-flex gap-3 mt-2'>
        {
          movie.map((data, index) => (
            <Card style={{ width: '17rem' }} key={index} className='border-0'>
              <Card.Img src={data.thumbnaill} />
              <CardFooter className='bg-dark text-white'>
                {<data.ratingIcon color="#fd395d" />}
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
      <Container>
        <h4 className='mt-5'>The Best Of Live Events</h4>
      </Container>
      <Container className='d-flex gap-3'>
        {
          event.map((data, index) => (
            <Card style={{ width: '17rem' }} key={index} className='border-0 mt-3'>
              <Card.Img src={data.poster} />
            </Card>
          ))
        }
      </Container>
      <Container fluid className='d-flex flex-column gap-4 mt-5 text-white justify-content-center  p-5' style={{ backgroundColor: '#2c2c4d' }}>
        
      <FaCirclePlay color='#fd395d' size={90} />
      <div>
        <h1 className='ms-5 '><span className='ms-5'><strong>PREMIERE</strong></span></h1>
        <p className='ms-5 '><span className='ms-5'>Watch New movies at home,every Friday</span></p>
        </div>

       

        <div className='mt-5'>
          <h3 className='mt-5 ms-5'><span className='ms-5'>PREMIERES</span></h3>
          <p className='ms-5 mb-5'><span className='ms-5'>Brand New Releases,every Fridaay</span></p>
          </div>
          
        <div className='d-flex gap-4 justify-content-center'>
          {
            cntblack.map((data, index) => (
              <Card style={{ width: '14rem', }} key={index} className='border-0' >
                <Card className="d-flex flex-column">
                  <CardImg src={data.cardimg} style={{ height: '25rem' }} />

                  {data.isTrue  &&  (
                    <Badge bg="danger" className="position-absolute p-2 bottom-0 badge bg-danger justify-content-start me-5" >
                      <span className='me-4 ms-4'>PREMIERE</span>
                    </Badge>
                  )}

                </Card>
                <CardFooter style={{ backgroundColor: '#2c2c4d' }} className='text-white'>
                  <h5 className='mt-3'>{data.movieName2}</h5>
                  <p className=''>{data.lang}</p>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </Container>
    </Container >

  );







}

export default Home;


