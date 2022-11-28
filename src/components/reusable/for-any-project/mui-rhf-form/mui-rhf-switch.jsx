/* 🔖 This component is different than other input fields. This will have no variant. So, less code than other input fields.*/

// rhf component
import { Controller } from 'react-hook-form';


// mui component
import {FormControlLabel, Switch} from '@mui/material'


// ✅ functional component
export default function MUI_RHF_SWITCH({ propertyName, label, control }) {

    // ✅ jsx
    return(

        <Controller
            name={propertyName}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
                <FormControlLabel
                    value={value}
                    onChange={onChange}
                    control={<Switch />}
                    label={label}
                />

            )}
        />

    )


}

