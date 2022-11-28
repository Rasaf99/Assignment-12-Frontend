// hook
import { useEffect } from "react";

import useAuthContext from "hook/context/use-auth-context"
import useAxios from "hook/use-axios"



import {STYLED_ALL_CARDS_WRAPPER, STYLED_A_CARD} from './style'

// components
import { Button, Divider, Modal, Box} from '@mui/material';
import vehicleAxios from "api/vehicle";




// ✅ functional component
export default function MY_VEHICLE_CARD({successResponse, refetch}) {

     // useAuthContext() hook
     const {user} = useAuthContext()


     // useAxios() hook
     const { isSuccess, isError, isLoading, successResponse:successResponseDelete, errorResponse, axiosRequest } = useAxios()


    const deleteUser = (id) => {

        axiosRequest({
            axiosInstance: vehicleAxios,
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
  
  



    return (


       <>
        
        <STYLED_ALL_CARDS_WRAPPER>


            {successResponse.map((vehicle)=>{

                return(

                    <STYLED_A_CARD key={vehicle._id}>

                        {/* card_image_wrapper */}
                        <div className='card_image_wrapper'>

                        <img className='card_image' src={vehicle.vehicle_image} alt='quiz_name'/>

                        </div>

                        {/* card_all_content_except_image */}
                        <div className='card_all_content_except_image'>
                        
                            <h4> {vehicle.vehicle_name}</h4>

                            <Divider/>

                            <p>Category: {vehicle.category} </p>

                            <Divider/>

                            <p>Resale Price: {vehicle.resale_price} taka </p>
                            
                            <p>Original Price: {vehicle.original_price} taka </p>

                            <Divider/>

                            <p>Years of use: {vehicle.years_of_use} Years</p>

                            <p>Condition: {vehicle.condition}</p>

                            <Divider/>

                            <p>Seller Username: {vehicle.seller_username} </p>
                            <p>Seller Location: {vehicle.seller_location} </p>

                            <Divider/>

                            <p>Post Date: {vehicle.createdAt} </p>


                            <Button onClick={()=> deleteUser(vehicle._id)} variant='contained'>Delete Vehicle</Button>






                
                        </div>



                </STYLED_A_CARD>

            )


            


            })}


        

            
            
        </STYLED_ALL_CARDS_WRAPPER>


    


    </>
    )
}