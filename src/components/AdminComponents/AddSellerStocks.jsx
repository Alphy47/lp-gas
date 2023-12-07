import React, { useState } from 'react';
import indexbg from '../../assests/indexbg.jpg'
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const AddSellerStocks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [regSize, setRegSize] = useState('');
  const [budgetSize, setBudgetSize] = useState('');
  const [buddySize, setBuddySize] = useState('');
  const [error, setError] = useState(false);

  const getURLParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const sellerId = searchParams.get('seller_id');
    return { sellerId };
  };

  const { sellerId } = getURLParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!regSize || !budgetSize || !buddySize) {
      setError(true);
      return;
    }
        const dataset={
           seller_id: sellerId,
           regSize,
           budgetSize,
           buddySize
        }
        try {
            const response = await fetch("http://localhost:5000/api/addsellerstocks", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataset),
            });
          
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
          
            const responseData = await response.json();
          
            if (responseData && responseData.message) {
              console.log("Seller stocks updated successfully");
              
            } else {
              console.log("Update unsuccessful");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        // try {
        //     const response = await fetch("http://localhost:5000/api/addsellerstocks", {
        //       method: "POST",
              
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(dataset)
        //     });
        
        //     if (!response.ok) {
        //       throw new Error("Network response was not ok");
        //     }
        
        //     const responseData = await response.json();
        
        //     if (responseData && responseData.success) {
        //         // navigate("../adminhome/managestocks");
        //         navigate ('/adminnotifications')
        //       console.log("Stock has been added!");
            
        //     } else {
        //       console.log("Add to Stocks is unsuccessful");
        //       if (responseData && responseData.message) {
        //         // alert(responseData.message);
        //       } else {
        //         alert("Unexpected error occurred");
        //       }
        //     }
        //   } catch (error) {
        //     console.error("Error:", error);
        //     alert("Network error occurred. Please try again.");
        //   }

    
  };

  return (
    <div className='bg-cover h-screen flex items-center justify-center' style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
      <div className='container p-0 w-[30%] rounded-md' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className='flex justify-end pr-1 pb-1'>
          <FaTimes size={25} style={{ color: '#FF5733' }} onClick={() => navigate('../adminhome/managestocks')} />
        </div>
        <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
          <div className='flex text items-center text-[200%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Add Stocks</div>
          <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded '></div>
        </div>
        <div className='inputs flex flex-col gap-1'>
          <form action='#' onSubmit={handleSubmit}>
            <div className='input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
              <div className='flex flex-col'>
                <input className='bg-transparent text-white text-[19px]' 
                    id="sellerIdInput" 
                    name='seller_id' 
                    style={{ width: "85%" }} 
                    type='text' 
                    value={`Seller ID: ${sellerId || ''}`}
                    readOnly />
              </div>
            </div>
           
            <div className='regularsize input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
              <label className='px-2' size={35} style={{ color: '#FF5733' }}>12.5L:</label>
              <div className='flex flex-col'>
                <input className='bg-transparent text-white text-[19px]' 
                        id='regularSizeInput' 
                        name='regularSizeInput' 
                        style={{ width: "85%" }} 
                        type='number' 
                        min='0'
                        placeholder='Regular Size' 
                        onChange={e => setRegSize(e.target.value)} />
                {error && regSize.length <= 0 ? <label className='text-red-500 text-[13px]'>Textbox can't be empty.</label> : ""}
              </div>
            </div>
            <div className='budgetsize input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <label className='px-2' size={35} style={{ color: '#FF5733' }}>5L : </label>
                <div className='flex flex-col'>
                  <input className='bg-transparent text-white text-[19px]' 
                          id='budgetSizeInput' 
                          name='budgetSizeInput' 
                          style={{width:"85%"}} 
                          type='number' 
                          min='0'
                          placeholder='Budget Size'
                          onChange={e=>setBudgetSize(e.target.value)}
                  />
                  {error&&budgetSize.length<=0?
                  <label className='text-red-500 text-[13px]'>Textbox can't be empty.</label>:""}
                </div>
            </div>
            <div className='buddysize input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <label className='px-2' size={35} style={{ color: '#FF5733' }}>2.5L:</label>
                <div className='flex flex-col'>
                  <input className='bg-transparent text-white text-[19px]' 
                          id='adminpassword' 
                          name='adminpassword' 
                          style={{width:"85%"}} 
                          type='number' 
                          min='0'
                          placeholder='Buddy Size'
                          onChange={e=>setBuddySize(e.target.value)}
                  />
                  {error&&buddySize.length<=0?
                  <label className='text-red-500 text-[13px]'>Textbox can't be empty.</label>:""}
                </div>
            </div>
        
            <div className='submit-container flex mx-auto my-[1rem]  gap-1'>
              <button className='bg-white w-[100px] rounded-md font-bold my-2 mx-auto py-0 h-[30px] text-black' 
                    style={{ transition: 'background-color 0.3s, color 0.3s', 
                    border: 'none', 
                    cursor: 'pointer', 
                    backgroundColor: 'white', 
                    color: 'black' }} 
                    onMouseEnter={(e) => { e.target.style.backgroundColor = '#FF5733'; e.target.style.color = 'white'; }} 
                    onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddSellerStocks;
