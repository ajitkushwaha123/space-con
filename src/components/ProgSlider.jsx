import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProgSlider = () => {   
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed:0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
    ]
    
  };



  return (
    <div className='m-auto xl:px-16 sm:px-10 px-8 md:px-10'>
      <div className='mt-20 bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter'>
      <SlickSlider {...settings}>

         {data.map((d) => (
           <div key={d.title} className='flex flex-col justify-center items-center text-black '>
            <div className='flex flex-col justify-center items-center p-5'>
              <div className='w-[240px] h-[240px]'>
                <img src={d.posterUrl} className='rounded-xl' />
              </div>

              <div className='gap-4 p-4 flex flex-col justify-center items-center align-middle'>
                <p className='text-xl font-semibold'>{d.title}</p>
                <p>{d.description}</p>
                <div className='bg-spaceCon-tertiary text-white text-lg px-6 py-1 rounded-md'>{d.day}</div>
                <div className=' bg-spaceCon-tertiary text-white text-lg px-6 py-1 rounded-md'>{d.time}</div>
              </div>
            </div>
          </div>
         ))}

         </SlickSlider>
      </div>
    </div>
  )
}

export default ProgSlider

const data = [
  {
    title: "Event Name 1",
    description: "something of a one liner",
    posterUrl: "https://moodi.org/static/media/js.5de450ab9613902905c8.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },
  {
    title: "Event Name 2",
    description: "Description for Event 2",
    posterUrl: "https://moodi.org/static/media/ps_blog.210fe6cb983bc590df9f.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },
  {
    title: "Event Name 3",
    description: "Description for Event 3",
    posterUrl: "https://moodi.org/static/media/cs.e3de83627554a897efdd.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },
  {
    title: "Event Name 4",
    description: "Description for Event 4",
    posterUrl: "https://moodi.org/static/media/ap.8bf6c591e6a445576239.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },

  {
    title: "Event Name 5",
    description: "Description for Event 5",
    posterUrl: "https://moodi.org/static/media/si.a84f8f5439189f789f9f.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },

  {
    title: "Event Name 6",
    description: "Description for Event 6",
    posterUrl: "https://moodi.org/static/media/pt.28e02965a49796169280.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },

  {
    title: "Event Name 7",
    description: "Description for Event 7",
    posterUrl: "https://moodi.org/static/media/vg.4fd025a0acb7e5b5c9e9.png", // Use the imported image
    day:"Day1",
    time:"12:00 pm",
  },
  // Add more events here
];
