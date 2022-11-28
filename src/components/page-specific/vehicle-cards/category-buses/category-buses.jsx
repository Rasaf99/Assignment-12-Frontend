// hook
import { useEffect } from "react";


// custom hook
import useAuthContext from "hook/context/use-auth-context";
import useAxios from "hook/use-axios";


// api
import vehicleAxios from "api/vehicle";



// components
import { Box, Typography } from "@mui/material"

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"

import VEHICLE_CARD from "components/reusable/just-for-this-project/vehicle-card/vehicle-card";



// functional component
export default function CATEGORY_BUSES() {


    // useAuthContext() hook
    const {user} = useAuthContext()


    // useAxios() hook
    const { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest } = useAxios()



    const fetchData = () => {

        axiosRequest({
            axiosInstance: vehicleAxios,
            method: 'GET',
            url: '/category/buses',
            
            configurationObj: {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                }
            }
        })

    }


    useEffect(() => {


        // try to fetch data only when user is not null   
        if(user) {
          fetchData()
       }
       
  
      // eslint-disable-next-line
      }, [])
  



    return (

        <Box>


            {

                /*  Immediately invoked anonymous function */
                (() => {

                    if (isLoading) {
                        return (
                            <LOADING_SPINNER />
                        )
                    }

                    else if (isError) {
                        return (

                            <ERROR_TEXT text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (
                            <div>

                            <Typography variant='h4' sx={{textAlign:'center', color:'primary.main', marginTop:'1rem'}}> All the Buses </Typography>


                             <VEHICLE_CARD successResponse={successResponse}/>
                             

                            
                            </div>
                           
                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }

        </Box>

    )
}