import React from 'react'
import { Link } from 'react-router-dom'

export default function Customers() {
  return <div><p>This is Customer page</p><Link to='/adminhome' className='underline'>Go to Dashboard</Link></div>
}

