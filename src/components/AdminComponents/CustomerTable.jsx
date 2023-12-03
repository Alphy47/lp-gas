import React, { useState, useEffect } from 'react';

export const CustomerTable = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('#');
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
          const response = await fetch(`#your-api-endpoint/${id}`, {
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
      
  return (
    <div>
        <h2 className='text-white'>Customer Data Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerData.map(customer => {
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address}</td>
                        <td>
                            <button onClick = {() => handleDelete(customer.id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CustomerTable;