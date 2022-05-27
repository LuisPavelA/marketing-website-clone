import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Nav() {
    return (
        <div className='w-10/12 mx-auto flex justify-between py-5'>
            <div className="flex items-center">
                <div className='flex items-center mr-10 cursor-pointer mx-3'>
                    <ShoppingCartIcon fontSize="large" className="mr-1"/>
                    <h1 className='text-3xl font-bold w-3/5 mx-auto'>Shop</h1>
                </div>
                <button className="md:flex hidden mx-3 font-bold hover:text-stone-700">Sell</button>
                <button className="md:flex hidden mx-3 font-bold hover:text-stone-700">Market</button>
                <button className="md:flex hidden mx-3 font-bold hover:text-stone-700">Manage</button>
            </div>
            <div className='flex items-center'>
                <button className="lg:flex hidden mx-4 font-bold hover:text-stone-700">Learn</button>
                <button className="lg:flex hidden mx-4 font-bold hover:text-stone-700">Partners</button>
                <button className="lg:flex hidden mx-4 font-bold hover:text-stone-700">Pricing</button>
                <button className="lg:flex hidden mx-4 font-bold hover:text-stone-700">Login</button>                
                <button className="mx-4 font-bold rounded-md bg-black text-white p-2 hover:-translate-y-1 transition-transform">Get started for FREE</button>
            </div>
        </div> 
    );
}

export default Nav;