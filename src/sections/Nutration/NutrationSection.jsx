import React, { useEffect, useState } from 'react'
import { nutrientLists } from '../../constants';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const NutrationSection = () => {
  const [lists,setLists] = useState(nutrientLists);

  const isMobile = useMediaQuery({
    query:"(max-width:768px)",
  })

  useEffect(() => {
    if(isMobile){
      setLists(nutrientLists.slice(0,3));
    }else{
      setLists(nutrientLists);
    }
  },[isMobile])

  useGSAP(() => {
    const titleSplit = new SplitText('.nutrition-title',{
      type:"chars"
    });

    const paragraphSplit = new SplitText('.nutrition-section p',{
      type:"words, lines",
      linesClass:"paragraph-line"
    });

    const contentTimeline = gsap.timeline({
      scrollTrigger:{
        trigger:".nutrition-section",
        start:"top center",
      }
    })

    // start doing animations
    contentTimeline.from(titleSplit.chars,{
      yPercent:100,
      stagger:0.02,
      ease:"power2.inOut",
    })
    
    contentTimeline.from(paragraphSplit.words,{
      yPercent:300,
      rotate:3,
      duration:1,
      stagger:0.01,
      ease:"power2.inOut",
    })
  })

  const titleTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:".nutrition-section",
      start:"top top",
    }
  })

  titleTimeline.to('.nutrition-text-scroll',{
    duration:1,
    opacity:1,
    clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    ease:"power1.inOut",
  })

  return (
    <section className='nutrition-section'>
      <img 
        src="/images/slider-dip.png" 
        alt="slider image" />
      
      <img 
        className='big-img'
        src="/images/big-img.png" 
        alt="slider image" />

      <div
        className='flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0'>
        
        <div
          className='relative inline-block transform md:translate-y-20'
        >
          <div className="general-title relative flex items-center flex-col gap-24">

          <div className="overflow-hidden place-self-start">
            <h1 className='nutrition-title'>it's still does</h1>
          </div>

          <div
            style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
            className='nutrition-text-scroll place-self-start'
          >
            <div
              className='bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 inline-block'>
              <h2 className='text-milk-yellow'>body good</h2>
            </div>
          </div>
          </div>
        </div>

          <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>
        
        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default NutrationSection