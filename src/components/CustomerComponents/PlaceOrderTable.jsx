import React, { useState, useEffect } from 'react';


export const PlaceOrderTable = () => {

    function handleClick(sellerId, stockId) {
        window.location.href = `/placeorderhere?stock_id=${stockId}&seller_id=${sellerId}`;
    }

    const [sellerData, setSellerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('http://localhost:5000/api/viewstocks');
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

    // const handleDelete = async (id) => {
    //     try {
    //     const response = await fetch(`http://localhost:5000/api/sellers/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //     });
    
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    
    //     // Remove the deleted seller from the sellerData state
    //     setSellerData((prevData) => prevData.filter((seller) => seller.id !== id));
    
    //     console.log(`Seller with ID ${id} deleted successfully.`);
    //     } catch (error) {
    //     console.error('Error deleting seller:', error);
    //     }
    // };
    
return (
    <div className='relative w-screen mx-auto items-center justify-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', height: '90vh', overflowY: 'auto' }}>
    <table className='text-white' style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr className='text-[#FF5733] border-b border-white'>
                <th className='p-4'>Stock ID</th>
                <th className='p-4'>Seller ID</th>
                <th className='p-4'>Seller Name</th>
                <th className='p-4'>Location</th>
                <th className='p-4'>Reguler</th>
                <th className='p-4'>Budget</th>
                <th className='p-4'>Buddy</th>
                <th className='p-4'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {sellerData.map(seller => (
                <tr key={seller.id} style={{ borderBottom: '1px solid white' }}>
                    <td className='p-4 text-center'>{seller.seller_id}</td>
                    <td className='p-4 text-center'>{seller.stock_id}</td>
                    <td className='p-4 text-center'>{seller.seller_name}</td>
                    <td className='p-4 text-center'>{seller.address}</td>
                    <td className='p-4 text-center'>{seller.regular}</td>
                    <td className='p-4 text-center'>{seller.budget}</td>
                    <td className='p-4 text-center'>{seller.buddy}</td>
                    <td className='p-4 text-center'>
                        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} 
                        onClick={() => {
                            console.log("Seller ID:", seller.seller_id);
                            console.log("Stock ID:", seller.stock_id);
                            handleClick(seller.stock_id, seller.seller_id)
                        }}
                            
                        >Place Order</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


)
}

export default PlaceOrderTable;