import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (catergories) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGifs(catergories)
            // .then( imgs => setImages(imgs))
            // .then(setImages)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [catergories])



    return state;
}