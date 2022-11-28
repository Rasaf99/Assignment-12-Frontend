/*🔖 New type of code is explained in this file but if something is not explained, then may be that type of code is already explained in 'MUI_RHF_IMAGE' component. */


// rhf
import { useForm } from 'react-hook-form';

// icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';


// components
import { Button, Typography, ImageList, ImageListItem} from '@mui/material'



// ✅ functional component
export default function MUI_RHF_IMAGES({label, selectedImages, setSelectedImages, selectedImagesLink, setSelectedImagesLink, validation_variables_obj}){


    /*🔖 Info about the props:

      ✨ label (Required) ✨

      It will just be a string. The string can be: 'Product Images', 'Select Images', etc.


      ✨ selectedImages (Required), setSelectedImages (Required) ✨ 

      The component where I will import this `MUI_RHF_IMAGES` component, there I will need to create a state to store the selected image's info. So, I will create the following state there:

      const [selectedImages, setSelectedImages] = useState('');

      I will pass the 'selectedImages' and 'setSelectedImages' as prop.



      ✨ selectedImagesLink (Required), setSelectedImagesLink (Required) ✨ 

      The component where I will import this `MUI_RHF_IMAGES` component, there I will need to create a state to store the selected image's preview link's info. So, I will create the following state there:

      const [selectedImagesLink, setSelectedImagesLink] = useState(null);

      I will pass the 'selectedImagesLink' and 'setSelectedImagesLink' as prop.



      ✨ validation_variables_obj (Optional) ✨ 

      🚀 If I want to validate the image, I will need to pass this 'validation_variables_obj' prop.

  

      🚀 If there is a limitation of how many files can be selected and if I want to validate that, I will need to pass the following object as 'validation_variables_obj' prop:

          {    
              'accepted_total_files': 3
          }

          Here, the property name has to be 'accepted_total_files' and it's value has to be a number.


      🚀 If I just want to validate file format, I will need to pass the following object as 'validation_variables_obj' prop:


          {    
                'accepted_file_formats': ['png', 'jpg', 'jpeg'],
          }

          Here, the property name has to be 'accepted_file_formats' and it's value has to be an array.



      🚀 If I just want to validate maximum file size, I will need to pass the following object as 'validation_variables_obj' prop:


          {
              'accepted_maximum_file_size' : 512  //kb
          }

          Here, the property name has to be 'accepted_maximum_file_size' and it's value has to be a number.



      🚀 If I  want to validate more than one thing, let's suppose I want to validate all the above things, then I will need to pass the following object as 'validation_variables_obj' prop:

          {
            'accepted_total_files': 3,
            'accepted_file_formats': ['png', 'jpg', 'jpeg'],
            'accepted_maximum_file_size' : 512,  //kb
          }

      */



  // useForm
  const { register, formState } = useForm({ mode: 'onChange' })


 
    // function to handle all the selected images and their preview link
   const handleSelectedImages = (e) => {
      
      const selectedFiles = e.target.files
      const selectedFilesArray = Array.from(selectedFiles)


      /*🔖  
      
        ✨ I thought about updating the following state only if all the selected image is valid. But actually, it's not possible to do. Reason:

        Because this 'handleSelectedImages' function is running on the 'onInput' event. But react-hook-form's validation is running on the 'onChange' event. Usually, 'onInput' event runs earlier than the 'onChange' event. So, the following state will get updated before validation!

        ✨ In scenario-wise, I wanted to do the following stuff:**
        
        First, think about the scenario: An user has selected two images. Then, he is again selecting another image but this time the image has invalid format. I wanted not to add that invalid image on the state, show him an error message and also keep the two previously added two images on the state.


      ✨ What I wanted to do in the above scenario, that's not possible. But I can do the following stuff:

        I can show him an error message. But the invalid image will get added on the state because onInput event is faster than onChange event. So, in the react-hook-form's onChange event's validation, I will empty the following state. In this way, the user will get an error message and will need to start selecting image from scratch.
      
      */

      setSelectedImages([...selectedImages, ...selectedFilesArray]);

      const imagesLinkArray = selectedFilesArray.map((file) => {

        /* 🔖 

          Why are we returning an object here? We could have simply return an string with just the link and all the tutorial that I have seen in the internet have done that. Reason behind returning an object:
          
          If someone chooses the same image multiple time, I want to preview that image just one time. So, I need to check whether an image is getting select multiple time or not. I can't check that with link. Because the link that is created with  URL.createObjectURL() is unique every time. Even two files will have different link. So, I am returning a object with the image name property. For same two file, name will also be same. So, I will be able to check that if a user is selecting the same image again or not. 

        */
        return {
          link: URL.createObjectURL(file),
          name: file.name
        }

      })

      setSelectedImagesLink([...selectedImagesLink, ...imagesLinkArray]);
            
    


      /*🔖
        What if any user selects the same image twice? We will remove duplicated image from the state.
      */

      // checking for duplicated image
      if (selectedImages.length !== 0){

      selectedImages.map((alreadySelected) => {

        selectedFilesArray.map((tryingToSelect) => {

            if(alreadySelected.name === tryingToSelect.name) {

              setSelectedImages(selectedImages.filter((image) => image !== tryingToSelect))
            }

          })

        })

      }


      /*🔖
        What if any user selects the same image twice? We will remove duplicated imag(linke from the state.
      */

      // checking for duplicated link
      if (selectedImagesLink.length !== 0){

        selectedImagesLink.map((alreadySelected) => {


          imagesLinkArray.map((tryingToSelect) => {

        
            if(alreadySelected.name === tryingToSelect.name) {

              setSelectedImagesLink(selectedImagesLink.filter((link) => link !== tryingToSelect))

            }

          })

        })

      }

   }


    // function to delete an specific image from all the selected images
    function handleDeleteAnImageFromSelectedImages(deleteThis) {

      setSelectedImages(selectedImages.filter((image) => image.name !== deleteThis.name))

      setSelectedImagesLink(selectedImagesLink.filter((linkObj) => linkObj !== deleteThis))
    }


  
    
    // rules for form validation 
    const images_validation_rules = {

      validate: () => {

        // ✨ nothing to validate when no file is selected
        if (selectedImages.length === 0) return;



        // ✨ limit
        if((Object.hasOwn(validation_variables_obj, 'accepted_total_files'))) {

          const accepted_total_files = validation_variables_obj.accepted_total_files

          let file_limit_error = false

          if (selectedImages.length > accepted_total_files) {
            file_limit_error = true
          }
  
          if (file_limit_error) {
  
            /*🔖 first, set the selectedImagesLink state to an empty array. Otherwise, even when you will select valid images next time, you will still get to preview invalid images which you selected previous time */
      
            setSelectedImages([])
            setSelectedImagesLink([])
  
            return 'You can not select more than 3 files.'
          }
    
        }


        // ✨ file format
        if((Object.hasOwn(validation_variables_obj, 'accepted_file_formats'))) {

          const accepted_file_formats = validation_variables_obj.accepted_file_formats

          let file_format_error = false

          const array_of_format_of_uploaded_files = selectedImages.map((item) => {

            return item.name.split('.')[1]
          })


          array_of_format_of_uploaded_files.map((uploaded_file_format) => {

            if (!accepted_file_formats.includes(uploaded_file_format)) {
              return file_format_error = true
            }
          })


          if (file_format_error) {

            /*🔖 first, set the selectedImagesLink state to an empty array. Otherwise, even when you will select valid images next time, you will still get to preview invalid images which you selected previous time */
            setSelectedImages([])
            setSelectedImagesLink([])

            return 'All files must have valid format'
          }

    
        }


        // ✨ file size
        if((Object.hasOwn(validation_variables_obj, 'accepted_maximum_file_size'))) {

          const accepted_maximum_file_size = validation_variables_obj.accepted_maximum_file_size

          let file_size_error = false

          const array_of_size_of_uploaded_files = selectedImages.map((item) => {
  
            return Math.round(item.size / 1024)
          })
  
  
          array_of_size_of_uploaded_files.map((uploaded_file_size) => {
  
            if (uploaded_file_size > accepted_maximum_file_size) {
              return file_size_error = true
            }
  
          })
  
  
          if (file_size_error) {
  
            /*🔖 first, set the selectedImagesLink state to an empty array. Otherwise, even when you will select valid images next time, you will still get to preview invalid images which you selected previous time */
            setSelectedImages([])
            setSelectedImagesLink([])
  
            return 'File size can not be larger than 500kb'
          }


    
        }



        /* ⚠️⚠️⚠️ couldn't make logic to check all the selected images dimension! In the MUI_RHF_IMAGE component, I have done it when I was working with just one image. */

      }
  
        
    }
    




    return(

     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>

        {/*🚀 Upload images */}
        <Button component="label" variant="outlined" startIcon={<PhotoCamera />}>
         {label}

        <input style={{ width: '0px' }}
          {...register('images', { ...images_validation_rules })}
          type="file" multiple
          onInput={handleSelectedImages}
        />

        </Button>

        {/* images upload - error */}
        {formState.errors.images &&
        <Typography variant='p' sx={{ color: 'error.main', textAlign: 'center' }}>{formState.errors.images.message}</Typography>
        }


        {/* image upload - previewing */}
        {!formState.errors.images && selectedImagesLink.length > 0 &&

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <ImageList sx={{ width: '208px', height: '150px' }} cols={2} gap={8}>
            {selectedImagesLink.map((item) => (
              <ImageListItem key={item.link}>
                <img
                  src={item.link}
                  alt=''
                />

                <Button onClick={() => handleDeleteAnImageFromSelectedImages(item)} size="small">
                  Remove
                </Button>
              </ImageListItem>
            ))}
          </ImageList>

        </div>

        }

        
     </div>

    )

}