import { DatePicker, DateTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React from 'react'

export default function SolicitudesExamenPage() 
{
    const [value, setValue] = React.useState<dayjs.Dayjs | null>(null)
    return (
      <React.Fragment>
        <h1>Solicitudes Page</h1>

            
                <DatePicker disabled defaultValue={dayjs()}/>
            
            <br />
            <br />
            <DatePicker 
                label="Fecha de Examen"
                value={value} 
                onChange={(newValue) => setValue(newValue)} 
                maxDate={dayjs(new Date())}
                slotProps={{
                    textField:{
                        helperText: "MM/DD/YYYY"
                    }
                }}
                localeText={{
                    
                }}
            />
            <br />
            <br />
            <DateTimePicker 
                defaultValue={dayjs('2022-04-17T15:30')} 
                ampm
            />
         
      </React.Fragment>
    )
}
