import React, { useRef } from 'react'
import { flavorlists } from "../../constants";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  // Implementing horizontal scrolling
  const flavorRef = useRef();
  
  const isTablet = useMediaQuery({
    query:"(max-width:1024px)"
  }) 

  useGSAP(() => {
    const scrollAmount = flavorRef.current.scrollWidth - window.innerWidth;

    if(!isTablet){
      
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger:".flavor-section",
          start:"top top",
          end:`+=${scrollAmount + 1000}px`,
          pin:true,
          scrub:true,
        }
      });
  
      timeline.to('.flavor-section',{
        x:`-${scrollAmount + 1000}px`,
        ease:"power1.inOut",
      })
    }

  })

  const titleTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:".flavor-section",
      start:"top top",
      end:"bottom 80%",
      scrub:true,
    }
  })

  titleTimeline.to('.first-text-split',{
    xPercent:-30,
    ease:"power1.inOut"
  })
  
  titleTimeline.to('.flavor-text-scroll',{
    xPercent:-22
  },
  // "<"
  )
  
  titleTimeline.to('.second-text-split',{
    xPercent:-10,
    ease:"power1.inOut"
  },
  // "<"  
  )
  
  return (
    <div ref={flavorRef} className='slider-wrapper'>
        <div className="flavors">
          {
            flavorlists.map((flavor,idx) =>(
                  <div 
                    key={idx}
                    className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                  >
                  <img
                    src={`/images/${flavor.color}-bg.svg`}
                    alt={flavor.name}
                    className='absolute bottom-0'
                  />
                  
                  {/* 
                      md:bottom-auto simply unpropitious the bottom element when the screen gets wider.
                  */}
                  
                  <img
                    src={`/images/${flavor.color}-drink.webp`}
                    alt={flavor.name}
                    className='drinks'
                  />
                  
                  <img
                    src={`/images/${flavor.color}-elements.webp`}
                    alt={flavor.name}
                    className='elements'
                  />
                  <h1>{flavor.name}</h1>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default FlavorSlider