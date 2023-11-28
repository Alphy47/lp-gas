import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
    return <div><p className='text-white'>This is dashboard</p>
    <Link to='sellers' className='underline'>Go to Sellers</Link>
    <Link to='customer' className='underline'>Go to Customers</Link></div>
    
    
}