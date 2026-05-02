import {useEffect, useState} from 'react'
import axios from 'axios'

interface Res<T>{  // we have to put T here otherwise in data it wont know what T is
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  //refetch: () => Promise<void>; this is better --> it is async functn hence it returns a Promise<void>
  //this also valid but we use the arrow functn syntax preferred refetch():void
}

export default function useFetch<T>(url:string):Res<T> {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false) //Right now, nothing is loading, component mounts
    const [error, setError] = useState<string | null>(null)

    async function refetch() { 
        setLoading(true) // A request is starting NOW -- outside try catch cuz whatever if the req fails or not we are going in the loading state  
        setError(null) // reset any prev error of any kind
    try {
        const res =await axios.get<T>(url)
        setData(res.data)
    } catch (error:unknown) {
        if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError("Something went wrong");
  }
    } finally {
        setLoading(false) // whatever error or not but now the loading has stopped (if it was an error then also we had to stop loading so instead on doing this on both try + catch do once here)
    }
    }

    useEffect(() => {
        refetch()
        }, [url])  // imp
        

        const response:Res<T> = {
            data:data,
            loading:loading,
            error:error,
            refetch:refetch
        }

    return response
    // return { data, loading, error, refetch } we can also do directly this cus is start we mention this function will return Res<T> type
        
}