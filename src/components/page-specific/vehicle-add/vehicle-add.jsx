import { useEffect, useState } from "react";

// router
import { useNavigate } from "react-router-dom";


// styles
import { JSX_WRAPPER, STYLED_FORM } from './style.js'

// rhf
import { useForm } from 'react-hook-form';

//toast
import { toast } from "react-toastify";

// components
import { Button, Typography } from '@mui/material'

import { MUI_RHF_INPUT, MUI_RHF_RADIO, } from 'components/reusable/for-any-project/mui-rhf-form/index'
import MUI_RHF_IMAGE from "components/reusable/for-any-project/mui-rhf-form/mui-rhf-image.jsx";
import useAxios from "hook/use-axios.js";
import vehicleAxios from "api/vehicle.js";
import useAuthContext from "hook/context/use-auth-context.js";




//✅ functional component
export default function VEHICLE_ADD() {


  // state to store the selected image
  const [selectedImage, setSelectedImage] = useState('');

  // state to store the preview link of the selected images
  const [selectedImageLink, setSelectedImageLink] = useState(null);


  // router navigate
  const navigate = useNavigate()


  // ✨ useForm 
  const { handleSubmit, control, reset } = useForm({ mode: 'onChange' })


  // useAxios() hook
  const { isSuccess: isSuccessFormData, isError: isErrorFormData, isLoading: isLoadingFormData, successResponse: successResponseFormData, errorResponse: errorResponseFormData, axiosRequest: axiosRequestFormData } = useAxios()


  const { isSuccess: isSuccessImageUpload, isError: isErrorImageUpload, isLoading: isLoadingImageUpload, successResponse: successResponseImageUpload, errorResponse: errorResponseImageUpload, axiosRequest: axiosRequestImageUpload } = useAxios()


  const { user } = useAuthContext()


  // ✨ the following function will run after the form is submitted
  const submittedData = async (allData) => {

    if (user) {
      axiosRequestFormData({
        axiosInstance: vehicleAxios,
        method: 'POST',
        url: '/',
        body: {
          "category": `${allData.category}`,
          "vehicle_name": `${allData.vehicle_name}`,
          "resale_price": `${allData.resale_price}`,
          "original_price": `${allData.original_price}`,
          "years_of_use": `${allData.years_of_use}`,
          "condition": `${allData.condition}`,
          "seller_id": `${user.id}`,
          "seller_username": `${user.username}`,
          "seller_location": `${allData.seller_location}`,
        },

      })

    }

  }



  useEffect(() => {


    /*🔖 Don't know why but if I use useAxios hook to post image, getting an error that I haven't selected any file! 
    
    I haven't got the solution. So, using try..catch and regular axios! */

    const uploadImage = async () => {

      try {

        const formData = new FormData();
        formData.append("vehicleImage", selectedImage);

        const uploadResponse = await vehicleAxios.post(`${successResponseFormData?._id}/image`, formData
        )

        console.log('📷 image upload response', uploadResponse)

      }

      catch (error) {
        console.log('📷 image upload error', error.response);
      }

      finally{

        // remove all previewed images
        setSelectedImageLink(null)


        // reset the form (ui)
        reset()

        //toast
        toast.success('Your post is submitted successfully.')

        // navigate
        navigate('/vehicle/cards')

      }
    }


    /* 🔖 only when the isSuccessFormData is true (means data of form is submitted successfully and gotten a response), we want to call the uploadImage() function */

    if (isSuccessFormData) {
        uploadImage()

        //toast
        toast.warning('Wait! Uploading the picture!')

    }


    //eslint-disable-next-line
  }, [isSuccessFormData])



  // ✨ rules for form validation 
  const validationRules = {

    title: {
      required: 'Required Field',
    },

    description: {
      required: 'Description is required',
    },

    image_link: {
      required: 'Image Link is required',
      pattern: {
        value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        message: 'Provide a valid URL'
      }
    },

    price: {
      required: 'Required Field',
      pattern: {
        value: /^[0-9]+$/,
        message: 'You must provide a number'
      }
    }
  }


  /* ✨ value and label for all radio buttons. These 'category_radio_array' will be passed as an prop to <MUI_RHF_RADIO/> component. */
  const category_radio_array = [
    {
      value: 'buses',
      label: 'Bus'
    },

    {
      value: 'trucks',
      label: 'Truck'
    },

    {
      value: 'cars',
      label: 'Car'
    }
  ]




    /* ✨ value and label for all radio buttons. These 'category_radio_array' will be passed as an prop to <MUI_RHF_RADIO/> component. */
    const condition_radio_array = [
      {
        value: 'excellent',
        label: 'Excellent'
      },
  
      {
        value: 'good',
        label: 'Good'
      },
  
      {
        value: 'fair',
        label: 'Fair'
      }
    ]





  // ✅ jsx
  return (

    <JSX_WRAPPER>

      <STYLED_FORM onSubmit={handleSubmit(submittedData)} noValidate>

        <Typography variant='h4' sx={{ textAlign: 'center', color: 'primary.main' }}> Vehicle's info </Typography>


        {/* Vehicle Name */}
        <MUI_RHF_INPUT control={control} label="Vehicle's Name" propertyName='vehicle_name' validationObj={validationRules.title} variant='standard' />


        {/* Category */}
        <MUI_RHF_RADIO label='Select a category' propertyName='category' control={control} radioArray={category_radio_array} />

        
        {/* Condition */}
        <MUI_RHF_RADIO label='Condition of your vehicle' propertyName='condition' control={control} radioArray={condition_radio_array} />


        {/* Resale Price */}
        <MUI_RHF_INPUT control={control} label='Resale Price' propertyName='resale_price' validationObj={validationRules.price} variant='standard' />


        {/* Original Price */}
        <MUI_RHF_INPUT control={control} label='Original Price' propertyName='original_price' validationObj={validationRules.price} variant='standard' />

        {/* Years of Use */}
        <MUI_RHF_INPUT control={control} label='Years of Use' propertyName='years_of_use' validationObj={validationRules.price} variant='standard' />

        {/* Your location */}
        <MUI_RHF_INPUT control={control} label="Your location" propertyName='seller_location' validationObj={validationRules.title} variant='standard' />


        {/*🚀✨ Vehicle's Image */}
        <MUI_RHF_IMAGE
          label='Vehicle Image'
          setSelectedImage={setSelectedImage}
          selectedImageLink={selectedImageLink}
          setSelectedImageLink={setSelectedImageLink}

          validation_variables_obj={{

            'accepted_file_formats': ['png', 'jpg', 'jpeg'],
            'accepted_maximum_file_size': 512,  //kb

            // dimension
            'accepted_image_width': 1000,  //px
            'accepted_image_height': 1000  //px
          }}

        />




        <Button type="submit" variant="contained">Submit</Button>



      </STYLED_FORM>

    </JSX_WRAPPER>


  )
}