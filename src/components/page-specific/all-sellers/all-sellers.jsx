// hook
import { useEffect } from "react";

// custom hook
import useAuthContext from "hook/context/use-auth-context";
import useAxios from "hook/use-axios";

// api
import userAxios from "api/user";

// components
import { Box } from "@mui/material";

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project/index";

import USER_CARD from "components/reusable/just-for-this-project/user-card/user-card";





// ✅ functional component
export default function ALL_SELLERS() {

    // useAuthContext() hook
    const {user} = useAuthContext()


    // useAxios() hook
    const { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest } = useAxios()


    const getData= ()=> {
        axiosRequest({
            axiosInstance: userAxios,
            method: 'GET',
            url: '/role/seller',
            
            configurationObj: {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                }
            }
        })
    }


    useEffect(() => {

      // try to fetch data only when user is not null   
      if(user.role ==='admin') {

        getData()
     }
     

    // eslint-disable-next-line
    }, [user])






    // ✅ jsx
    return (


        <Box>

            {

                /* Immediately invoked anonymous function */
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

                           <USER_CARD successResponse={successResponse} refetch={getData}/> 


                        )
                    }



                })() /* End: Immediately invoked anonymous function */


            }

        </Box>


    )

}