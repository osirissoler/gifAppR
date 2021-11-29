// import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ catergories, dark }) => {
    const { data: images, loading } = useFetchGifs(catergories);
    return (
        <div className="mt-4">
            {/* <hr className={dark ? 'bordere-white' : 'bordere-dark'} />
            <hr className={dark ? 'bordere-white' : 'bordere-dark'} /> */}
            {/* <h3 className={dark ? "text-white" : "text-dark"}>{catergories}</h3> */}

            { /* {loading ? 'Cargando....': 'Data cargada'} */}
            {loading && <p className={dark ? "text-white" : "text-dark"}> Cargando.... </p>}

            <div className="row"> {
                images.map(img => {
                    return <GifGridItem key={img.id} {...img} dark={dark}
                    />
                })
            }
            </div> </div>
    )
}