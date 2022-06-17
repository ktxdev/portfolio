import React from 'react'
import hero_image from '../Assets/hero.png';

const About = () => {
    return (
        <div id='summary' className='w-full flex flex-col-reverse items-center py-48 text-center md:flex-row md:justify-center md:gap-28 md:text-left'>
            <div className="font-montserrat mt-16">
                <h4 className="font-roboto font-bold text-red-500 sm:text-base md:text-lg" >Hi, my name is</h4>
                <h2 className="text-3xl xl:text-5xl font-bold my-1">Sean Huvaya.</h2>
                <h2 className="text-2xl xl:text-4xl mt-3 tracking-wide text-gray-600 font-bold my-1">I'm a Backend Software Developer.</h2>
                <p className="mt-6 mb-12 leading-8 tracking-widest max-w-md lg:max-w-xl">
                I'm a backend developer based in Zimbabwe with a love for creating exceptional web applications.
                </p>
                <a href="/" className="bg-red-500 text-white py-2 px-10 rounded-full">
                    Get In Touch
                </a>
            </div>
            <img className='h-40 lg:h-56 ' src={hero_image} alt="Hero Image" />
        </div>
    )
}

export default About