import {createContext, useReducer} from 'react';

export const ChurchContext = createContext();

export const churchReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return {
                data: action.payload
            }
        case 'CREATE_DATA':
            return {
                data: [action.payload, ...state.data]
            }

        case 'DELETE_DATA':
            return{
                data: state.data.filter((d) => d._id !== action.payload._id)
            }
        default:
            return state

    }

}

export const ChurchContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(churchReducer, {
        data: null
    })

    return ( 
        <ChurchContext.Provider value={{...state, dispatch}}>
            {children}
        </ChurchContext.Provider>
     );
}
 

