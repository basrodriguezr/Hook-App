import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        Error: null
    });

    //Se usa el useEffect para llamar a la función getFetch cuando el componente se monta o cuando cambia la URL
    useEffect(() => {
        getFetch();

    }, [url]);
        
    const setLoadingState = ()=> {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            Error: null
        });
    }

    const getFetch = async () => {
        if(localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                Error: null
            });
            // console.log('Data fetched from cache');
            return;
        }

        setLoadingState();
        const Response = await fetch(url);
            //sleep
            await new Promise(resolve => setTimeout(resolve, 1000));

        if (!Response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                Error: {
                    code: Response.status,
                    message: Response.statusText
                }
            });
            
            return;
        }
        
        const data = await Response.json();

        setState({
            data: data, 
            isLoading: false,
            hasError: false,
            Error: null
        });

       // Cache the data to avoid unnecessary requests
        localCache[url] = data;       
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        Error: state.Error,
    }
}   
