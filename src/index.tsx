import { Badge, Button, Card, CardFooter, CardImg, Carousel, Form, NavLink, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IMAGES } from './constants';
import { GrMenu } from "react-icons/gr";
import { IconType } from 'react-icons';
import icon from './constants/icon';
import { FaCirclePlay } from "react-icons/fa6";
import { TbBuildingCircus } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { TbMailOpened } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { AiOutlinePinterest } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";


// interfaces starting######
interface MoviesModel {
  thumbnaill: string,
  ratingIcon: IconType,
  ratingPercentage: string,
  movieName: string,
  category: string,
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
    { cardimg: IMAGES.B5, movieName2: "GhostBusters", lang: "Hindi/English", isTrue: true },
    { cardimg: IMAGES.B2, movieName2: "Endeavour", lang: "Tamil/English", isTrue: true },
    { cardimg: IMAGES.B3, movieName2: "Skins", lang: "Malayalam/English", isTrue: true },
    { cardimg: IMAGES.B4, movieName2: "Jules", lang: "English", isTrue: true },
    { cardimg: IMAGES.B1, movieName2: "The Boys", lang: "Tamil", isTrue: true }

  ]



  return (

    <Container fluid> {/*-----------------------------------------------------------> Grand parent of all contents starting */}
    <p>Created by thowfeeq</p>
      <Container fluid>

        <Navbar expanded className='d-flex gap-4 justify-content-center'>
          <Navbar.Brand>
            <img src={IMAGES.Business_Logo}
              alt="bookMyShow logo"

            />
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

        {/* small navbar left */}
        <Navbar className=' gap-3 mt-1 px-4 justify-content-between'>
          <div className='d-flex ms-5 gap-3'>
            <NavLink><small>Movies</small></NavLink>
            <NavLink ><small>Stream</small></NavLink>
            <NavLink ><small>Events</small></NavLink>
            <NavLink><small>Plays</small></NavLink>
            <NavLink><small>Sports</small></NavLink>
            <NavLink><small>Activities</small></NavLink>
          </div>

          {/* smaall navbar right */}
          <div className='d-flex me-5 gap-3'>
            <NavLink><small>ListYourShow</small></NavLink>
            <NavLink><small>Corporates</small></NavLink>
            <NavLink><small>Offers</small></NavLink>
            <NavLink><small>GiftCards</small></NavLink>
          </div>

        </Navbar>
      </Container>
      <Container fluid className='mt-1'>
        <Carousel>
          <Carousel.Item>
            <CardImg src={IMAGES.C1} />

          </Carousel.Item>
          <Carousel.Item>
            <CardImg src={IMAGES.C2} />

          </Carousel.Item>
          <Carousel.Item>
            <CardImg src={IMAGES.C3} />

          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <div>
          <h4 className='mt-5'>Recommended Movies</h4>
        </div>
      </Container>

      <Container className='d-flex gap-3 mt-2'>
        {/* cards on the top of the website starting */}
        {
          movie.map((data, index) => (
            <Card style={{ width: '17rem' }} key={index} className='border-0'>
              <Card.Img src={data.thumbnaill} />
              <CardFooter className='bg-dark text-white'>
                {<data.ratingIcon color="#fd395d" />}
                {data.ratingPercentage}
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
        {/* cards on the top of the website ending */}
      </Container>


      {/* Banner starting */}
      <Container>
        <Card className='mt-5'>
          <CardImg
            src={IMAGES.Banner} />
        </Card>
      </Container>
      {/* Banner end */}



      {/* Events heading */}
      <Container>
        <h4 className='mt-5'>The Best Of Live Events</h4>
      </Container>
      {/* Events heading end */}




      <Container className='d-flex gap-3 '>
        {/* Events starting */}

        {
          event.map((data, index) => (
            <Card style={{ width: '17rem' }} key={index} className='border-0 mt-3'>
              <Card.Img src={data.poster} />
            </Card>
          ))
        }

        {/* Events end */}
      </Container>


      <Container fluid

        className='
       d-flex 
       flex-column 
       gap-4 
       mt-5 text-white 
       justify-content-center
       pt-4
       pb-4'

        style=
        {{ backgroundColor: '#2c2c4d' }}
      >
        <div className='d-flex gap-2'>
          <FaCirclePlay color='#fd395d' size={60} className='ms-3' />
          <div>
            <h1 ><strong>PREMIERE</strong></h1>
            <p >Watch New movies at home,every Friday</p>
          </div>
        </div>

        <Container >
          <div className='ms'>
            <h1 ><strong>PREMIERE</strong></h1>
            <p >Watch New movies at home,every Friday</p>
          </div>

          <div className='d-flex gap-4 justify-content-between'>
            {
              cntblack.map((data, index) => (
                <Card style={{ width: '14rem' }} key={index} className='border-0' >
                  <Card className="d-flex flex-column">
                    <CardImg src={data.cardimg} style={{ height: '25rem' }} />

                    {data.isTrue && (
                      <Badge bg="danger" className="position-absolute p-2 bottom-0 badge bg-danger justify-content-start me-5" >
                        <span className='me-4 ms-4'>PREMIERE</span>
                      </Badge>
                    )}

                    {/* Black container cards staring */}
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
      </Container>


      <footer className=" mt-5 pt-4" style={{ backgroundColor: '#363640' }}>

        <Container className=''>
          <div className='mb-5 text-white mt-5'>
            <div className='ms-5'>
              <h6 className='d-flex'>
                <TbBuildingCircus size={"40px"} className=' ms-5 ' /> <strong style={{ fontSize: '25px' }}>List your Show</strong>
                <h6 className='ms-2 mt-2 '>Got a Show,Events,Activity or great Experience? Partner with us & Get listed BookMyShow</h6>


                <Button className='bg-danger border-0 d-flex ms-5 ps-4 pe-4'>
                  Contact today!
                </Button>

              </h6>
            </div>
          </div>
          <div  className='d-flex  justify-content-center  pt-5  ' style={{ backgroundColor: '#4d4c4b'}}>

            <div className='hover-zoom pb-5 '>
              <a href='www.bookmyshow.com'>
                <RiCustomerService2Fill
                  size={50}
                  className=' me-5'
                  color='white'

                />
              </a>

              <a href='www.bookmyshow.com'>
                <IoTicketOutline

                  size={50}
                  className=' ms-5 me-5'
                  color='white'

                />
              </a>

              <a href='www.bookmyshow.com'>
                <TbMailOpened
                  size={50}
                  className=' ms-5 me-5 '
                  color='white'

                />
              </a>
            </div>

          </div>
        </Container>




        <div className="container-fluid ms-5 mt-5">
          <div className="row">

            <div className=" mb-md-5 mb-3">
              <ul className="list-unstyled">
                <p className='text-uppercase' style={{ color: '#727372', fontSize: '15px' }}>movies now showing in coimbatore</p>
                <div style={{ color: '#858585' }}>
                  <li style={{ fontSize: '14px' }}>Garudan | Bad boys:ride or die | Weapon | Indian(1996) | Hara | PT sir | Dandupalayam
                    | Anjaamai | Gajini (Tamil)
                    | Aranmanai-4

                  </li>
                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}>upcoming movies in coimbatore</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja | Music Shop Murthy |
                    Sangarshyoddha Mano jaarange pateil| Nee Dhaarey Nee Katha | Sarvam Siddu | Chandu Champion


                  </li>

                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}>movies by genure</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja | Music Shop Murthy |
                    Sangarshyoddha Mano jaarange pateil| Nee Dhaarey Nee Katha | Sarvam Siddu | Chandu Champion


                  </li>

                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}> movies by language</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja
                    Sangarshyoddha Mano jaarange pateil| Nee Dhaarey Nee Katha | Sarvam Siddu | Chandu Champion


                  </li>

                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}>sports events in coimbatore</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja | Music Shop Murthy |
                    Sangarshyoddha Mano jaarange pateil| Nee Dhaarey Nee Katha


                  </li>
                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}>events in top cities</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja | Music Shop Murthy |
                    Sangarshyoddha Mano jaarange pateil


                  </li>

                  <h6 className='text-uppercase mt-5' style={{ color: '#727372', fontSize: '15px' }}>plays in top cities</h6>

                  <li className='' style={{ fontSize: '14px' }}>

                    T20 World Cup 2024:IND vs PAK | Pabar | T20 World Cup 2024:IND vs USA | Manihar | Maharaja | Music Shop Murthy |
                    Sangarshyoddha Mano jaarange pateil| Nee Dhaarey Nee Katha | Sarvam Siddu | Chandu Champion

                  </li>

                </div>
              </ul>
            </div>


          </div>
        </div>




        <div className="footer-copyright text-center py-3 text-white">
          <hr />

          <a href='www.bookmyshow,com'>
          <img
            src={IMAGES.logo2}
            width={250}
           />
          </a>
        </div>

        <div className="footer-copyright text-center py-3 text-white">
          <div className='justify-content-between '>

            <a href='https://www.facebook.com/thowfeeq_ahmad_/?next=%2F&hl=en'>
              <FaFacebook size={30} color='white' className='me-3 mb-5 mt-3' />
            </a>

            <a href='https://www.github.com/thowfeeq_ahmad_/?next=%2F&hl=en'>
              <BsTwitterX size={20} color='white' className='me-3 mb-5 mt-3' />
            </a>

            <a href='https://www.instagram.com/thowfeeq_ahmad_/?next=%2F&hl=en'>
              <TiSocialInstagram size={30} color='white' className='me-3 mb-5 mt-3' />
            </a>

            <a href='https://www.youtube.com'>
            <FaYoutube size={30} color='white' className='me-3 mb-5 mt-3' />
            </a>

            <a href='https://www.pinterest.com'>
              <AiOutlinePinterest size={30} color='white' className='me-3 mb-5 mt-3' />
            </a>

            <a href='https://www.linkedin.com'>
              <TiSocialLinkedinCircular size={30} color='white' className='me-3 mb-5 mt-3' />
            </a>
          </div>
        </div>




        <div
          className="footer-copyright text-center py-3 text-secondary pb-5"
          style={{ fontSize: '12px' }}

        > 2024 Copyright © Big tree entertaiment pvt.ltd.All rights reserved <br />The content and images
          used on this site are copyright protected and copyrights vests with the respective owners.
          The usage of the content and images on this website is intended to promote the works
          and no endorsement of the artist shall be implied. Unauthorized use is prohibited and
          punishable by law.




        </div>

      </footer>



    </Container>
  );







}

export default Home;


