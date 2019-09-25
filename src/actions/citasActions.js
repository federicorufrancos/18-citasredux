//actions will pass automatically to the store
//this actióon will be invoked from the view
export const agregarCitaAction = (cita) => {
    return {
        type: 'AGREGAR_CITA',
        payload: cita
    }
}

export const borrarCitaAction = id => {
    return {
        type: 'BORRAR_CITA',
        payload: id
    }
}