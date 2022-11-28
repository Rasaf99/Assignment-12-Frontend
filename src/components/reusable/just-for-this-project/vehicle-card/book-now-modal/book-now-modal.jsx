import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MUI_RHF_INPUT } from 'components/reusable/for-any-project/mui-rhf-form';
import { useForm } from 'react-hook-form';
import useAxios from 'hook/use-axios';
import useAuthContext from 'hook/context/use-auth-context';
import bookNowAxios from 'api/book-now';

// router
import { useNavigate } from "react-router-dom";



// styles
import { JSX_WRAPPER, STYLED_FORM } from './style.js'
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const modalStyle = {
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




export default function BOOK_NOW_MODAL({openModal, handleClose, vehicle_name, price}) {

  console.log(vehicle_name)


    // ✨ useForm 
    const { handleSubmit, control, reset } = useForm({ mode: 'onChange' })


    // useAxios() hook
    const { isSuccess, isError, isLoading, successResponse, errorResponse, axiosRequest } = useAxios()




    
  const { user } = useAuthContext()


  // ✨ the following function will run after the form is submitted
  const submittedData = async (allData) => {

    if (user) {
      axiosRequest({
        axiosInstance: bookNowAxios,
        method: 'POST',
        url: '/',
        body: {
          "vehicle_name": `${vehicle_name}`,
          "price": `${price}`,
          "meeting_location": `${allData.meeting_location}`,
          "buyer_id": `${user.id}`,
          "buyer_username": `${user.username}`,
          "buyer_email": `${user.email}`,
          "buyer_phone_number": `${allData.buyer_phone_number}`,
      
        },

      })

    }

  }



    // router navigate
    const navigate = useNavigate()



  useEffect(() => {


    if(isSuccess) {

              // reset the form (ui)
              reset()

              //toast
              toast.success('Your data is submitted successfully.')
      
              // navigate
              navigate('/vehicle/orders')



    }




    //eslint-disable-next-line
  }, [isSuccess])







    // ✨ rules for form validation 
    const validationRules = {

      title: {
        required: 'Required Field',
      },
  
  
      price: {
        required: 'Required Field',
        pattern: {
          value: /^[0-9]+$/,
          message: 'You must provide a number'
        }
      },

      
    phoneNumber: {
      required: 'Phone number is required',
      minLength: {
        value: 6,
        message: 'Number must be at least 6 digit long.'
      },
      maxLength: {
        value: 18,
        message: 'Number must not be longer than 18               digits.'
      },
      pattern: {
        value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\      \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]? (?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
        message: 'Provide a valid phone number.'
      }
    },
    }
  


   

  

  // ✅ jsx
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>

  


          {/* 🚀🚀 Modal Content is starting from here.. */}


        <JSX_WRAPPER>



          <h4> {vehicle_name}</h4>

          <p>Resale Price: {price}taka </p>


          <p>Buyer Username: {user.username}</p>

          <p>Buyer Email: {user.email}</p>



        <STYLED_FORM onSubmit={handleSubmit(submittedData)} noValidate>
          
          {/* Phone Number  */}
          <MUI_RHF_INPUT control={control} label='Phone Number' propertyName='buyer_phone_number' validationObj={validationRules.phoneNumber} variant='standard' />

          {/* Meeting Location */}
          <MUI_RHF_INPUT control={control} label="Meeting Location" propertyName='meeting_location' validationObj={validationRules.title} variant='standard' />



          <Button type="submit" variant="contained">Submit</Button>




        </STYLED_FORM>





        </JSX_WRAPPER>

















          {/* 🚀🚀 Modal Content is finishing  here.. */}

        </Box>
      </Modal>
    </div>
  );
}