import React from 'react';
import Slider from 'react-slick';
import { DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { FaAws, FaDocker } from 'react-icons/fa';
import { SiGraphql, SiTypescript ,SiRedux,SiSpringboot } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tech Stack Data
const techData = [
 
  { icon: <DiReact title="React" />, name: "React", progress: 90 },
  { icon: <TbBrandReactNative title="React Native" />, name: "React Native", progress: 90 },
  { icon: <SiRedux title="Redux" />, name: "Redux", progress: 90 },
  { icon: <DiNodejs title="Node js" />, name: "Node js", progress: 40 },
  { icon: <DiJavascript1 title="Javascript" />, name: "Javascript", progress: 90 },
  { icon: <SiGraphql title="GraphQL" />, name: "GraphQL", progress: 60 },
  { icon: <FaAws title="AWS" />, name: "AWS", progress: 50 },
  { icon: <DiMongodb title="MongoDB" />, name: "MongoDB", progress: 80 },
  { icon: <DiGit title="Git" />, name: "Git", progress: 85 },
  { icon: <FaDocker title="Docker" />, name: "Docker", progress: 40 },
  { icon: <SiSpringboot title="Springboot" />, name: "Springboot", progress: 40 },
  { icon: <SiTypescript title="TypeScript" />, name: "TypeScript", progress: 75 },
];

function TechCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto slide every 2 seconds
    cssEase: "linear",
  };

  return (
    <div style={{ marginBottom: '50px' }}>
       <h2 className="text-xl font-bold uppercase underline underline-offset-8 text-neutral-800 mt-5 mb-5">Skills</h2>
      <Slider {...settings}>
        {techData.map((tech, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '15px' }} className="tech-icons">{tech.icon}</div>
            <h5>{tech.name}</h5>
            <div style={{ width: '80%', height: '10px' }}>
              <div
                style={{
                  height: '100%',
                  width: `${tech.progress}%`,
                  backgroundColor: 'green',
                  borderRadius: '4px',
                }}
                className='mt-2'
              />
            </div>
            <span>{tech.progress}% completed</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TechCarousel;
