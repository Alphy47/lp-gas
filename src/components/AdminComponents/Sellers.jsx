import React from 'react'
import { Link } from 'react-router-dom'

export default function Sellers() {
  return <div><p>This is Seller page</p><Link to='/adminhome' className='underline'>Go to Dashboard</Link></div>
}

