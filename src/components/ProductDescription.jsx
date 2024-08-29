import React from 'react'

const ProductDescription = () => {
    return (
        <div className='max-padd-container mt-20'>
            <div className='flex gap-3 mb-4'>
                <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
                <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Usage Guide</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique sunt ex quia repellat porro iure possimus dolorem beatae maiores.</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique sunt ex quia repellat porro iure possimus dolorem beatae maiores.</p>
            </div>
        </div>
    )
}

export default ProductDescription
