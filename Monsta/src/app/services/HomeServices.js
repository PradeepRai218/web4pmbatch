import axios from "axios";

let getProducts=async()=>{
     let baseUrl=process.env.NEXT_PUBLIC_BASE_URL;
    return  axios.get(`${baseUrl}home/getproduct`)
     .then((res)=>res.data)
     
}

export {getProducts};