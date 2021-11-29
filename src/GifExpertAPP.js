import React, { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertAPP = () => {

    const [catergories, setCategories] = useState(["salud, amor, one punch, goku, animes,"]);
    const [dark, setDark] = useState(true)

    
    localStorage.setItem("dark", dark)
    
    const clickDark = () => {
        setDark(!dark)
        localStorage.setItem("dark", dark)
    }
    return (
        <div className="px-5 pt-5" className={dark ? "bgc-dark px-5 pt-5 " : "bg-white px-5 pt-5"} >
            <h2 className={dark ? "text-white" : "text-dark"}> GifAPP </h2> <
                AddCategory setCategories={setCategories}
            />
            {dark ? <div className="circle2 text-center row my-element" onClick={() => clickDark()}><i className="fas fa-sun col-12 align-self-center text-dark"></i></div> : <div className="circle1 text-center row my-element" onClick={() => clickDark()} ><i className="fas fa-moon text-white col-12 align-self-center"></i></div>}
            <ol>
                {
                    catergories.map(catergories => (
                        <GifGrid key={catergories} catergories={catergories} dark={dark} />
                    ))
                } </ol>

        </div>
    )
}

export default GifExpertAPP