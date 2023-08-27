//reuse code
//customer fetch start with use
import { useEffect, useState} from 'react';

const useFetch = (url ) => {
    const [data, setData] = useState(null);
    const [name, setName] = useState('mario');
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null)

    useEffect (() =>{
        const abortCont = new AbortController();


        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal}).then(

                res => {
                    if(res.ok){
                        SetError(null);
                        // console.log(res);
                    }else{
                        throw Error('Coupd not fetch the data for that resource')
                    }
                    
                    return res.json()
                }

            ).then(
                data => {
                    // console.log(data)
                    setData(data);
                    setIsPending(false)
            }).catch( err => {
                if (err.name === 'AbortError'){
                    console.log("fetch aborted")
                }else{
                    console.log(err.message)
                    SetError(err.message);
                    setIsPending(false);
                }

            });
        },1000)

        // return () => console.log("clean up")
        return () => abortCont.abort();
        // console.log('authentication fetch data');
        // console.log(name)
    }, [url]) //only once first render

    return {data, isPending, error}
}
export default useFetch;