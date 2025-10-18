import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const FlavorTitle = () => {

    useGSAP(() => {
        const firstTxt = new SplitText(".first-text-split",{
            type:"chars",
        })
        
        const secondTxt = new SplitText(".second-text-split",{
            type:"chars",
        })

        gsap.from(firstTxt.chars,{
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 30%",
            }
        })

        gsap.to('.flavor-text-scroll',{
            duration:1,
            clipPath:"polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 10%"
            }
        })

        gsap.from(secondTxt.chars,{
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top top"
            }
        })
    })

    return (
        <div
            className='general-title col-center h-full 2xl:gap-32 xl:gap-16 gap-10'
        >
            <div 
                className='overflow-hidden 2xl:py-0 py-3 first-text-split'
            >
                <h1>we have 6</h1>
            </div>

            <div
            style={{
                clipPath:"polygon(0 0, 0 0, 0 100%, 0 100%)"
            }}
            className='flavor-text-scroll'>
                <div className='bg-mid-brown pb-5 2xl:pt-0 2xl:px-5 px-3'>
                    <h2 className='text-milk'>freaking</h2>
                </div>
            </div>
            
            <div
            className='overflow-hidden 2xl:py-0 py-3 second-text-split'>
                <h1 className=''>delicious flavors</h1>
            </div>


        </div>
    )
}

export default FlavorTitle