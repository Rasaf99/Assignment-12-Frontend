import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

const bookNowAxios = axios.create({

    baseURL: `${process.env.REACT_APP_SERVER_HOST}/api/v1/book-now`,

    headers: {
        'Authorization': `Bearer ${user?.token}`,
    }

  })




export default bookNowAxios