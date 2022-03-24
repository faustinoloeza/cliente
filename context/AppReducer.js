export default function appReducer(state, action) {
    switch (action.type) {
      case 'ADD_CAR':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      case 'DELETE_CAR':
        return {
          ...state,
          cart: state.cart.filter((car) => car.id !== action.payload),
        };
      default:
        return state;
    }
  }