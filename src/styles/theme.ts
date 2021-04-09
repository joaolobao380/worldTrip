import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts:{
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles:{
        global:{
            body:{
                bg: 'yellow.50'
            },
            color:{
                "Dark":"#47585B"
            }
        }
    }
})