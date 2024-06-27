'use client';

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            decimals={2}
            prefix='$'
            decimal=','
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter