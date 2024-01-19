import { useState, useEffect } from "react";

import { getGif } from "../helpers/getGifs";


/**
 *  Hooks siempre retorna 2 cosas: un objeto y una funcion
 * 
 * @returns hook
 */
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false)
    }

    // /**
    //  * useEffect: 'simple'=> in this example, it is controlling that the func inside will be run just one time  
    //  * when the app si created, but dont when the state change.
    //  * The [] below indicates that not other instructions will trigger the func
    // */
    
    useEffect( () => {
        getImages();
    }, [] );

    return {
        images,
        isLoading
    }
    
}
