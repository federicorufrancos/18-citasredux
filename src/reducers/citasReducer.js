const initialState = {
    citas: []
}

//the actions has: the action the user is doing and the payload is the data been sent
export default function(state = initialState, action){
    switch(action.type) {
        case 'AGREGAR_CITA':
            return {
                ...state, 
                citas: [...state.citas, action.payload]
            }
        case 'BORRAR_CITA':
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        default:
            return state;
    }
}

/*
{
    ...state, =====> making a copy of the state 
    citas: [...state.citas, action.payload] ===> in case of citas, I'm  making a copy of all values and adding a new one 
    this is like making a this.setState({})
}
*/