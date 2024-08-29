import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full' id='home'>
                <div className='relative top-24 xs:top-72'>
                    <h4 className='uppercase medium-18 tracking-wider'>
                        Welcome to Zhabest Supermarket
                    </h4>
                    <h1 className='h1 capitalize max-w-[40rem]'>
                        Lorem ipsum dolor, <span className='text-secondary'>sit amet consectetur adipisicing elit</span>. Quas, excepturi?
                    </h1>
                    <p className='my-5 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias perferendis repellendus odit quae modi porro dolores ipsum nihil blanditiis.</p>

                    {/* buttons */}
                    <div className='flex items-center gap-x-4'>
                        <Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl'>
                            <div className='regular-14 leading-tight pl-4'>
                                <h5 className='uppercase fontbold'>New Arrivals</h5>
                            </div>
                            <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter'>
                                <FaArrowRight />
                            </div>
                        </Link>
                        <Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl'>
                            <div className='regular-14 leading-tight pl-4'>
                                <h5 className='uppercase fontbold'>Hot Deals</h5>
                            </div>
                            <div className='bg-primary text-tertiary h-10 w-10 p-1 rounded-full flexCenter'>
                                <FaArrowRight />
                            </div>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default Hero
