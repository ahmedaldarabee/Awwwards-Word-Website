import React, { useRef } from 'react'
import {cards} from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TestimonialSection = () => {

  const vdRef = useRef([]);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  }
  
  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  }

  useGSAP(()=>{
    // What this section mean? .set
    gsap.set(".testimonials-section",{
      marginTop:"-140vh"
    })

    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:".testimonials-section",
        start:"top bottom",
        end:"200% top",
        scrub:true,
      }
    })

    timeline.to('.testimonials-section .first-title',{
        xPercent:70,
    }).to('.testimonials-section .sec-title',{
      xPercent:25,
    },"<").to('.testimonials-section .third-title',{
      xPercent:-50,
    },"<")
    // [ overlapping idea ] we add < to run both of these parts simultaneously
  })

  const pinTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:".testimonials-section",
      start:"10% top",
      end:"bottom top",
      scrub:1.2,
      pin:true,
    }
  })

  pinTimeline.from(".vd-card",{
      yPercent:200,
      stagger:0.02,
      ease:"power1.inOut",
  });

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card transform ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection