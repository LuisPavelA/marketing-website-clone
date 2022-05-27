import React from 'react'
import landing from "../images/landing.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Landing() {
    return (
        <div className="text-center mt-24">
            <h1 className="text-6xl font-bold sm:w-3/5 w-4/5 mx-auto">Start selling online for free</h1>
            <p className="text-2xl sm:w-2/5 w-4/5 mx-auto mt-5 line leading-10">We’re putting free trials on trial. With us, you get free forever. Set up your free account once, and keep it as long as you like. Seriously.</p>
            <button className='mt-5 py-5 px-10 text-2xl md:text-white text-black md:bg-[#06945b] bg-[#fae053] rounded-2xl border-black border-2'>Get started for free <ArrowForwardIcon fontSize="medium"/></button>
            <p className="mt-5 text-xl text-slate-600">No credit card required.</p>
            <img src={landing} className="mx-auto" alt="" />
        </div>
    );
}

export default Landing;