// import  { useState, useEffect } from 'react';

export const GifGridItem = ({ id, title, url, dark }) => {

    // console.log({ id, title, url })

    return (
        <div className=" col-12 col-md-4 col-xl-3   align-self-center fff px-2">
            <img src={url} alt={title} width="100%" height="240px" />
            <p className={dark?"text-center pt-1 text-white animate__animated animate__flash":"text-center pt-1 animate__animated animate__flash"} > {title} </p>
        </div>
    )

}