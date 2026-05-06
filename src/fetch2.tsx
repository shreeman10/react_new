import {useState, useEffect} from 'react'
import axios from "axios"

interface Res <T>{  //T is a placeholder type (a generic). the user of this hook will decide
    //we only make requests - if from backend or db etc then we know what type of data will come etc we only made that so we will pass that also if req to another place/api then also we know what kind of data-obj will come so T type we will pass when using this hook and at the time of using this hook if T is an obj then we know what type etc.

    //const { data } = useFetch<Post>("...", page);
    //T = Post  -->  data = Post[]
    data:T[];
    loading:boolean;
    error: null | string;
    hasMore: boolean
}

const useFetch = <T,>(url:string, page:number):Res<T> =>{  //In .tsx files, <T> can be confused with JSX. So we use <T,> to disambiguate.

    const [data, setData] = useState<T[]>([]) 
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)

    const loadData = async()=>{
        try {
            setLoading(true)
            setError(null)
        const response =await axios.get<T[]>(`${url}?page=${page}`) //we know that this api returns an array of T so we are telling ts that
        if(response.data.length === 0){
            setHasMore(false)
        }
       setData(
            (prev:T[]) => ([...prev, ...response.data]) //we are adding, appending new data on old data [1,2]+[3,4] => [1,2,3,4]
       )
        } catch (err:unknown) {
            if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError("Something went wrong");
  }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
      setData([])
      setHasMore(true)
    }, [url])

    useEffect(() => {
      loadData()
    }, [page, url])

    return {
        data:data,
        loading:loading,
        hasMore:hasMore,
        error:error
    }
}
export default useFetch