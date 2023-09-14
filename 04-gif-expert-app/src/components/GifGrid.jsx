import { useEffect, useState } from 'react';
import { GifItem } from './GifItem.jsx';
import { getGifs } from '../helpers/getGifs.js';

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([])

    const getIamges = async() => {
        const newImages = await getGifs( category )
        setImages(newImages);
    }
    
    useEffect( ()=>{
        getIamges()
    }, [  ] )

    
    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                { images.map( (image) => {
                    return (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    )
                }) }
            </div>
        </>
    )
};
