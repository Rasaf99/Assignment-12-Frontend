import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

const vehicleAxios = axios.create({

    baseURL:  `${process.env.REACT_APP_SERVER_HOST}/api/v1/vehicle`,

    headers: {
        'Authorization': `Bearer ${user?.token}`,
    }

  })




export default vehicleAxios