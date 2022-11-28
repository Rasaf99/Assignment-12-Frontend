// hook
import { useState } from 'react';


// styles
import STYLED_LINK from 'styles/styled-components/router-link/router-link';

import {STYLED_ALL_CARDS_WRAPPER, STYLED_A_CARD} from './style'

// components
import { Button, Divider, Modal, Box} from '@mui/material';
import BOOK_NOW_MODAL from './book-now-modal/book-now-modal';


// style for modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



// ✅ functional component
export default function VEHICLE_CARD({successResponse}) {


    // book now modal
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);



    const [sendingThisToModal, setSendingThisToModal] = useState({}) 

    const openTheModalAndSendData = (name, price) => {
        
        handleOpenModal()

        setSendingThisToModal({

            vehicle_name: name,
            price: price


        })
    }


 

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


                                <Button onClick={()=> {openTheModalAndSendData(vehicle.vehicle_name, vehicle.resale_price)}} size="small" color="primary" variant='contained'>
                                    Book now
                                </Button>


                             


                        
                        </div>





                    
                
                </STYLED_A_CARD>

            )


            


            })}


            {openModal && 
        
                <BOOK_NOW_MODAL 
                    openModal={openModal}  
                    handleClose={handleClose}
                    
                    vehicle_name={sendingThisToModal.vehicle_name}
                    price={sendingThisToModal.price}
                    
            />}

        
            


            
            
        </STYLED_ALL_CARDS_WRAPPER>


    


    </>
    )
}