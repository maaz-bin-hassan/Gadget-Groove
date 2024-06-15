import React from 'react'
import { Link } from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '../components/UI/utils'

const Success = () => {
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt.</p>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href='info@gadgetGroove.com'>
          info@gadgetGroove.com
          </a>
        </p>
        <Link to='/home'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
