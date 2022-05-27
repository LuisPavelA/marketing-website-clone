import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Nav() {
    return (
        <div className='w-8/12 mx-auto flex justify-between py-5'>
            <div className="flex items-center">
                <ShoppingCartIcon fontSize="large" className="mx-3 cursor-pointer"/>
                <button className="mx-3 font-bold hover:text-stone-700">Sell</button>
                <button className="mx-3 font-bold hover:text-stone-700">Market</button>
                <button className="mx-3 font-bold hover:text-stone-700">Manage</button>
            </div>
            <div className='flex items-center'>
                <button className="mx-4 font-bold hover:text-stone-700">Learn</button>
                <button className="mx-4 font-bold hover:text-stone-700">Partners</button>
                <button className="mx-4 font-bold hover:text-stone-700">Pricing</button>
                <button className="mx-4 font-bold hover:text-stone-700">Login</button>                
                <button className="mx-4 font-bold rounded-md bg-black text-white p-2 hover:-translate-y-1 transition-transform">Get started for FREE</button>
            </div>
        </div> 
    );
}

export default Nav;