import React from 'react'
import { Link } from 'react-router-dom'
import SellerStocks from './SellerStocks'

export default function ManageStocks() {
  return <div className='overflow-y-auto h-[100%] flex w-[100%] '>
    <SellerStocks />
  </div>
}

