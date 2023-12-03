    import React, { useState, useEffect } from 'react';

    export const SellerTable = () => {
        const [sellerData, setSellerData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch ('#');
                    if (!response.ok) {
                        throw new Error ('Network response was not ok');
                    }
                    const data = await response.json();
                    setSellerData(data);
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
            setSellerData((prevData) => prevData.filter((seller) => seller.id !== id));
        
            console.log(`Seller with ID ${id} deleted successfully.`);
            } catch (error) {
            console.error('Error deleting seller:', error);
            }
        };
        
    return (
        <div>
            <h2 className='text-white'>Seller Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Seller ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sellerData.map(seller => {
                        <tr key={seller.id}>
                            <td>{seller.id}</td>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.address}</td>
                            <td>
                                <button onClick = {() => handleDelete(seller.id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
    }

    export default SellerTable;