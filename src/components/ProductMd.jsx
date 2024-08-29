import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { LuMoveUpRight } from "react-icons/lu";

const ProductMd = (props) => {

    const { product } = props
    const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext)
    const navigate = useNavigate()

    return (
        <section className='max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4'>
            <div className='flex gap-x-2 xl:flex-1 py-5'>
                <div className='flexCenter flex-col gap-[7px] flex-wrap'>
                    <img
                        src={url + '/images/' +product.image}
                        alt='productImg'
                        className='max-h-[89px] rounded-lg bg-gray-10'
                    />
                    <img
                        src={url + '/images/' +product.image}
                        alt='productImg'
                        className='max-h-[89px] rounded-lg bg-gray-10'
                    />
                    <img
                        src={url + '/images/' +product.image}
                        alt='productImg'
                        className='max-h-[89px] rounded-lg bg-gray-10'
                    />
                    <img
                        src={url + '/images/' +product.image}
                        alt='productImg'
                        className='max-h-[89px] rounded-lg bg-gray-10'
                    />
                </div>
                    <div className='max-h-[377px] w-auto flex'>
                        <img
                            src={url + '/images/' +product.image}
                            alt='bigImg'
                            className='rounded-xl bg-gray-10'
                        />
                    </div>
            </div>
                <div className='flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl'>
                    <h4 className='bold-28'>{product.name}</h4>
                    <div className='flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3'>
                        <div>₦{product.price}</div>
                        <div className='flex items-start gap-x-1 medium-16 text-secondary'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    <div className='flex gap-4 mb-8 max-w-[555px] flex-wrap'>
                        <button className='btn-secondary rounded-sm !py-4'>
                            <FaHeart />
                        </button>
                        <button 
                            onClick={() => navigate('/cart')} 
                            className='btn-dark rounded-sm sm:!px-20 !py-2 flexCenter gap-x-2'
                        >
                            Go to cart
                            <LuMoveUpRight className='text-xl' />
                            </button>
                            {!cartItems[product._id] ? (
                                <FaPlus 
                                    onClick={() => addToCart(product._id)}
                                    className='bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer'
                                />
                            ) : (
                                <div className='bg-tertiary text-white rounded-sm flexCenter gap-2'>
                                    <FaMinus 
                                        onClick={() => removeFromCart(product._id)}
                                        className='h-8 w-8 p-2 cursor-pointer'
                                    />
                                    <p className='text-white pr-2 w-3'>{cartItems[product._id]}</p>
                                    <FaPlus 
                                        onClick={() => addToCart(product._id)}
                                        className='rounded-sm bg-secondary h-8 w-8 p-1 mr-1 cursor-pointer'
                                    />
                                </div>
                            )}
                    </div>
                    <p>
                        <span className='medium-16 text-tertiary'>Category :</span> Shop
                    </p>
                </div>

        </section>
    )
}

export default ProductMd
