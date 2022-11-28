// style
import {STYLED_WRAPPER_OF_EVERYTHING} from './style.js'


// component
import NAVBAR from './navbar/navbar.jsx';
import FOOTER from './footer/footer';
import { Divider } from '@mui/material';


// ✅ functional component
export default function MAIN_LAYOUT({ children }) {


  return (

    <>
      {/* the following css styles and layout structure is essential for keeping the footer at the bottom of the page even when the page size is small.  (https://stackoverflow.com/a/67846892/14120900) */}


      <STYLED_WRAPPER_OF_EVERYTHING>

        <div> {/* wrapper_without_footer */}

          <NAVBAR />
          <Divider/>

          <div>{children}</div>

        </div>  {/* End: wrapper_without_footer */}


        <FOOTER />

      </STYLED_WRAPPER_OF_EVERYTHING>


    </>

  )

}



