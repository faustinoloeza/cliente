import { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
    cars: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
  
    function addCar(car) {
      dispatch({
        type: 'ADD_CAR',
        payload: car,
      });
    }
    function removeNote(id) {
      dispatch({
        type: 'DELETE_CAR',
        payload: id,
      });
    }
  
    return (
      <GlobalContext.Provider
        value={{
          notes: state.notes,
          addNote,
          removeNote,

        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };