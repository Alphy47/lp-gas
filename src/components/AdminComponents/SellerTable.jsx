    import React, { useState, useEffect } from 'react';

    export const SellerTable = () => {
        const [sellerData, setSellerData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch ('http://localhost:5000/api/sellers');
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
            const response = await fetch(`http://localhost:5000/api/sellers/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
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
        <div className='flex items-center justify-center flex-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px' }}>
    <table className='text-white' style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr className='text-[#FF5733]' style={{ borderBottom: '1px solid white' }}>
                <th style={{ apadding: '10px' }}>Seller ID</th>
                <th style={{ padding: '10px' }}>Name</th>
                <th style={{ padding: '10px' }}>Email</th>
                <th style={{ padding: '10px' }}>Address</th>
                <th style={{ padding: '10px' }}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {sellerData.map(seller => (
                <tr key={seller.id} style={{ borderBottom: '1px solid white' }}>
                    <td style={{ padding: '10px' }}>{seller.id}</td>
                    <td style={{ padding: '10px' }}>{seller.name}</td>
                    <td style={{ padding: '10px' }}>{seller.email}</td>
                    <td style={{ padding: '10px' }}>{seller.address}</td>
                    <td style={{ padding: '10px' }}>
                        <button style={{ backgroundColor: '#FF5733', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} onClick={() => handleDelete(seller.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )
    }

    export default SellerTable;