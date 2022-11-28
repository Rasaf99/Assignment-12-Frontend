// hook
import { useEffect } from "react";


// components
import {  Box, Button, Typography } from "@mui/material"
import bookNowAxios from "api/book-now"

import useAuthContext from "hook/context/use-auth-context"
import useAxios from "hook/use-axios"


// ✅ functional component
export default function ORDER_CARD({successResponse, refetch}) {


         // useAuthContext() hook
         const {user} = useAuthContext()


         // useAxios() hook
         const { isSuccess, isError, isLoading, successResponse:successResponseDelete, errorResponse, axiosRequest } = useAxios()
    
    
        const deleteUser = (id) => {
    
            axiosRequest({
                axiosInstance: bookNowAxios,
                method: 'Delete',
                url: `/${id}`,
                
                configurationObj: {
                    headers: {
                        'Authorization': `Bearer ${user?.token}`,
                    }
                }
            })
    
        }


        
   
    useEffect(() => {

        if(isSuccess) {
         refetch()
        }

   
      }, [isSuccess])
  
  


    return(

     <>

        {successResponse.map((item)=>{

            return(

                <Box key={item._id} sx={{backgroundColor:'background.variation', padding:'1rem', margin:'1rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>

                    <Typography> Vehicle Name: {item.vehicle_name}</Typography>
                    <Typography> Price: {item.price}</Typography>
                    <Typography> Meeting Location: {item.meeting_location}</Typography>
                    <Typography> Used email: {item.buyer_email}</Typography>
                    <Typography> Used Number: {item.buyer_phone_number}</Typography> 
                    <Typography> Order Time: {item.createdAt}</Typography>
                    
                    <Button onClick={()=> deleteUser(item._id)} variant='contained'>Delete Order</Button>



 

                </Box>


            )
            
         })}
        
        
      </>

    )
}