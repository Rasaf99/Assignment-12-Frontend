// rhf
import { useForm } from 'react-hook-form';

// icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// components
import { Button, Typography } from '@mui/material'


// ✅ functional component
export default function MUI_RHF_IMAGE({label, setSelectedImage, selectedImageLink, setSelectedImageLink, validation_variables_obj}){



  // useForm
  const { register, formState } = useForm({ mode: 'onChange' })


  /*🔖 I will not fully use react-hook-form for file type input field. I will just use react-hook-form on file type input field for validation, not for storing selected file info and sending the info on backend. But why?

    Reason: It's ok to use react-hook-form when the functionality is to select one file per input field. But when it comes to select multiple files per input field, I need to check whether anyone is selecting same file twice or not, I can check that if I track all the selected file with useState() hook, not with react-hook-form. Moreover, to preview selected file or files on UI, I must use useState() hook. So, there is no way to stop using useState() hook when it comes to file type input field. For all these reasons, I will not fully use react-hook-form on file type input. I will just use it for validation as it's easier to validate input field with react-hook-form.
   */



  // function to handle the selected image and it's preview link
  const handleSelectedImage = (e) => {

    const selectedFile = e.target.files[0]

    setSelectedImage(selectedFile);

    setSelectedImageLink(URL.createObjectURL(selectedFile))
  }


   // function to delete the selected image 
   function handleDeleteTheImage() {

    setSelectedImage('')

    setSelectedImageLink(null)
  }


  
  // validation - function to get image dimension. 

  /*🔖 
    This function will be used when we want to validate image's dimension. I haven't understood and tried to understood this function. Just copied from toofani cooder's sandbox.
  */
    const getImageDimension = async (file) => {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
          reader.onerror = () => {
            reader.abort()
            reject(new DOMException("Problem parsing input file."))
          };
    
          reader.onload = () => {
            var image = new Image()
            image.src = reader.result
            image.onload = function () {
              resolve({ width: this.width, height: this.height })
            }
          }
          reader.readAsDataURL(file);
        })
      }
    
    
    
      // rules for form validation 
      const image_validation_rules = {
    
          /*🔖 getImageDimensions is an async function, so we also need to make the following function an async function. */
          validate: async (value) => {
    
            // ✨ nothing to validate when no file is selected
            if (value.length === 0) return;

   
            // file types
           if((Object.hasOwn(validation_variables_obj, 'accepted_file_formats'))) {

            const accepted_file_formats = validation_variables_obj.accepted_file_formats

            const uploaded_file_formats = value[0].name.split('.')[1]
    
            if (!accepted_file_formats.includes(uploaded_file_formats)) {
    
              /*🔖 first, change back the state to the initial value  */
              setSelectedImage('')
              setSelectedImageLink(null)
    
              return 'please upload a valid file format.'
            }

           }
            
           
    
            // size
            if((Object.hasOwn(validation_variables_obj, 'accepted_maximum_file_size'))) {

                const accepted_maximum_file_size = validation_variables_obj.accepted_maximum_file_size

                const fileSize = Math.round(value[0].size / 1024)

                if (fileSize > accepted_maximum_file_size) {
    
                  /*🔖 first, change back the state to the initial value  */
                  setSelectedImage('')
                  setSelectedImageLink(null)
        
                  return "file size must be lower than 500kb";
                }


            }
           
    
    
            // dimension
            if( (Object.hasOwn(validation_variables_obj, 'accepted_image_width')) && (Object.hasOwn(validation_variables_obj, 'accepted_image_height')) ) {

                const accepted_image_width = validation_variables_obj.accepted_image_width

                const accepted_image_height = validation_variables_obj.accepted_image_height

                const dimension = await getImageDimension(value[0]);
    
                if (dimension.width > accepted_image_width && dimension.height > accepted_image_height) {
        
                  /*🔖 first, change back the state to the initial value  */
                  setSelectedImage('')
                  setSelectedImageLink(null)
        
                  return "Image's width and height must be less than or equal to 1000px";
                }

            }
            

    
          }
        
      }
    





    return(

     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>

        {/*🚀✨ Upload image */}
        <Button component="label" variant="outlined" startIcon={<PhotoCamera />}> {label}

            {/*🔖 
                The plan is to use the <input /> field inside the <Button></Button> component but to hide the input field on the UI.  In the MUI official documentation, they have used 'hidden' attribute on the <input/> tag to hide the input field on the UI. We can do the same thing with style={{display:'none'}} too. But react-hook-form library will not be able to get the value of this input field if we use 'hidden' attribute or style={{display:'none'}}.

                So, instead of using 'hidden' attribute or style={{display:'none'}} on the input field, use  style={{width:'0px'}}. 
            */}

            {/* 🔖 
                Previewing the selected image isn't possible automatically.That's why we have created 'selectedImageLink' state and 'handleSelectedImage' function to preview the selected image. If you check the following input field, you will see that we have used 'onInput' event to execute the 'handleSelectedImage' function. We are not using 'onchange' event here because react-hook-form library is already using 'onchange' event on the input field. So, not clash with react-hook-library, we are using 'oninput' event.
            */}

            {/*🔖 
                In the following input field, the 'onInput' attribute has to come after {..register()} & type='file' attributes, otherwise it will not work.  
            */}

            <input style={{ width: '0px' }}
                {...register('image', { ...image_validation_rules })}
                type="file"
                onInput={handleSelectedImage}
            />

        </Button>


        {/* image upload - error */}
        {formState.errors.image &&
            <Typography variant='p' sx={{ color: 'error.main', textAlign: 'center' }}>
            {formState.errors.image.message}
            </Typography>
        }



        {/* image upload - previewing */}
        {!formState.errors.image && selectedImageLink &&

            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>

                <img style={{ width: '100px', height: '100px' }} src={selectedImageLink} alt="" />

                <Button onClick={() => handleDeleteTheImage()} size="small">
                   Remove
                </Button>

            </div>
        }

        
     </div>

    )

}