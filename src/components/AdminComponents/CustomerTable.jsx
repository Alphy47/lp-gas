import React, { useState, useEffect } from 'react';

export const CustomerTable = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('http://localhost:5000/api/customers');
                if (!response.ok) {
                    throw new Error ('Network response was not ok');
                }
                const data = await response.json();
                setCustomerData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
          const response = await fetch(`http://localhost:5000/api/customers/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Add any necessary authorization headers or tokens if required
            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Remove the deleted seller from the sellerData state
          setCustomerData((prevData) => prevData.filter((customer) => customer.id !== id));
      
          console.log(`Customer with ID ${id} deleted successfully.`);
        } catch (error) {
          console.error('Error deleting customer:', error);
        }
      };
      console.log(customerData);
  return (
    
    <div className='relative w-screen mx-auto items-center justify-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', height: '90vh', overflowY: 'auto' }}>
        {/* <h2 className='text-white'>Customer Data Table</h2> */}
        <table className='text-white' style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead className=''>
                <tr className='text-[#FF5733]'>
                    <th style={{ padding: '10px' }}>Customer ID</th>
                    <th style={{ padding: '10px' }}>Name</th>
                    <th style={{ padding: '10px' }}>Email</th>
                    <th style={{ padding: '10px' }}>Address</th>
                    <th style={{ padding: '10px' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerData.map(customer => (
                    <tr key={customer.id} style={{ borderBottom: '1px solid white' }}>
                        <td className='p-4 text-center'>{customer.id}</td>
                        <td className='p-4 text-center'>{customer.name}</td>
                        <td className='p-4 text-center'>{customer.email}</td>
                        <td className='p-4 text-center'>{customer.address}</td>
                        <td className='p-4 text-center'>
                            <button style={{ backgroundColor: '#FF5733', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} onClick={() => handleDelete(customer.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default CustomerTable;