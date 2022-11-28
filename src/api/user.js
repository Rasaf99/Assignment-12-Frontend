import axios from "axios";

const userAxios = axios.create({

    baseURL: `${process.env.REACT_APP_SERVER_HOST}/api/v1/user`,

    

  })



export default userAxios