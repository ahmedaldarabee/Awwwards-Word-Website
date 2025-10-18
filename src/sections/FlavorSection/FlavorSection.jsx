import React from 'react'
import FlavorTitle from '/src/components/Flavor/FlavorTitle'
import FlavorSlider from '/src/components/Flavor/FlavorSlider'

const FlavorSection = () => {
    return (
        <section
            className='flavor-section'
        >
            <div className='h-full flex lg:flex-row flex-col items-center relative'>
                <div className='lg:w-[57%] flex-none h-80 lg:h-full mt-20 xl:mt-0'>
                    <FlavorTitle />
                </div>
                
                <div
                    className='h-full'
                >
                    <FlavorSlider />
                </div>
            </div>
        </section>
    )
}

export default FlavorSection