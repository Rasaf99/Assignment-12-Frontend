import axios from "axios";


const authAxios = axios.create({

    baseURL: `${process.env.REACT_APP_SERVER_HOST}/api/v1/auth`,

    headers: {
        'Content-Type': 'application/json',
     }
  })




export default authAxios