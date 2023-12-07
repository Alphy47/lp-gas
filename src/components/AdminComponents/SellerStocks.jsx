import React, { useState, useEffect } from 'react';

export const SellerStocks = () => {
    
    function handleClick(sellerId, stockId) {
        // Navigate to addSellerStocks page with seller_id parameter
        window.location.href = `/addsellerstocks?seller_id=${sellerId}`;
    }

    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('http://localhost:5000/api/stocks');
                if (!response.ok) {
                    throw new Error ('Network response was not ok');
                }
                const data = await response.json();
                setStockData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // const handleAdd = async (seller_id) => {
    //     try {
    //     const response = await fetch(`http://localhost:5000/api/stocks/${id}`, {
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
                <th className='p-4'>Regular Size</th>
                <th className='p-4'>Budget Size</th>
                <th className='p-4'>Buddy Size</th>
            </tr>
        </thead>
        <tbody>
            {stockData.map(stock => (
                <tr key={stock.id} style={{ borderBottom: '1px solid white' }}>
                    <td className='p-4 text-center'>{stock.stock_id}</td>
                    <td className='p-4 text-center'>{stock.seller_id}</td>
                    <td className='p-4 text-center'>{stock.regular}</td>
                    <td className='p-4 text-center'>{stock.budget}</td>
                    <td className='p-4 text-center'>{stock.buddy}</td>
                    <td className='p-4 text-center'>
                        <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} 
                        onClick={() => {
                            console.log("Seller ID:", stock.seller_id);
                            handleClick(stock.seller_id);
                          }}
                        >Add</button>
                    </td> 
                </tr>
            ))}
        </tbody>
    </table>
</div>


)
}

export default SellerStocks;