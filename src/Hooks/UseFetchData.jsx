import React,{useEffect,useState} from 'react'


const UseFetchData = () => {
    const token = localStorage.getItem("token"); 
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const fetchData =async()=>{
          setLoading(true)
            try{
              
              const res = await fetch(url,{
                headers:{Authorization:`Bearer ${token}`}
              })

              const result = await res.json()
              if(!res.ok){
                throw new Error(result.message + '--SMASH--')
              }

              setData(result.data)
              setLoading(false)

            }catch(error){
              setLoading(false)
              setError(err.message)
            }
        }

        fetchData();
    },[url])
  return {
    data,
    loading,
    error,
  }
}

export default UseFetchData