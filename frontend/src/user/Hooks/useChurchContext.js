import { useContext } from 'react';
import { ChurchContext } from '../context/userChurchContext';


export const useChurchContext = () => {
    const context = useContext(ChurchContext)

     if(!context){
        throw Error('context must be used where consumed')
     }

    return context
}
 

