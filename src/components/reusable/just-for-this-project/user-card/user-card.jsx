// hook
import { useEffect } from "react";


// components
import { Avatar, Box, Button, Typography } from "@mui/material"
import userAxios from "api/user"
import useAuthContext from "hook/context/use-auth-context"
import useAxios from "hook/use-axios"


// ✅ functional component
export default function USER_CARD({successResponse, refetch}) {

    
    // useAuthContext() hook
    const {user} = useAuthContext()


    // useAxios() hook
    const { isSuccess, isError, isLoading, successResponse:successResponseDelete, errorResponse, axiosRequest } = useAxios()


    const deleteUser = (id) => {

        axiosRequest({
            axiosInstance: userAxios,
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

                    <Avatar src={item.photoURL} alt={item.email}/>
                    <Typography> Username: {item.username}</Typography>
                    <Typography> ID: {item._id}</Typography>
                    <Typography> Email: {item.email}</Typography> 

                    <Button onClick={()=> deleteUser(item._id)} variant='contained'>Delete User</Button>

                </Box>


            )
            
         })}
        
        
      </>

    )
}