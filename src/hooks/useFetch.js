const { default: axios } = require("axios");
const { useState, useEffect } = require("react")

const useFetch = (url) =>{
const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(false);

 useEffect((url)=>{
    
    const fetchData = async() =>{
        setLoading(true);
        try{
            const res = await axios.get(url);
            setData(res)
        }
        catch(err){
            setError(err)
        }
        setLoading(false);
    }
    fetchData();
 },[])

 const refetch =async () =>{
    setLoading(true);
    try{
        const res = await axios.get(url);
        setData(res.data)
    }
    catch(err){
        setError(err)
    }
    setLoading(false);
 }
 return {data,loading,error,refetch}
}
export default useFetch;