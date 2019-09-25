import React, { useState } from 'react';
//this decide in what moment  I want to comunicate the action with the store
//useSelector has the same idea that mapStateToProps
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaAction } from '../actions/citasActions';
 import { validarFormularioAction } from '../actions/validacionActions';
import uuid from 'uuid/v4';

const AgregarCita = () => {

    const [ mascota, guardarMascota ] = useState('');
    const [ propietario, guardarPropietario ] = useState('');
    const [ fecha, guardarFecha ] = useState('');
    const [ hora, guardarHora ] = useState('');
    const [ sintomas, guardarSintomas ] = useState('');

    const dispatch = useDispatch();
    

    //defining the action
    //dispatch will execute the action to send the data to the store
    //the cita is part of the payload inside the reducer
    const agregarNuevaCita = (cita) => dispatch(agregarCitaAction(cita) );
    const validarFormulario = (estado) => dispatch(validarFormularioAction(estado));

    const error = useSelector(( state ) => state.error);
    console.log(error);
     
    const submitNuevaCita = e => {
        e.preventDefault();

        //saving the validation state into the store
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            validarFormulario(true);
            return;
        }
        validarFormulario(false);

        //invoking the dispatch creating a new date
        agregarNuevaCita({
            id: uuid(),
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
        })

        guardarMascota('');
        guardarPropietario('');
        guardarFecha('');
        guardarHora('');
        guardarSintomas('');

    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={submitNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Mascota" 
                                value={mascota}
                                onChange={ e => guardarMascota(e.target.value) }
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                value={propietario}
                                onChange={ e => guardarPropietario(e.target.value) }
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={fecha}
                                onChange={ e => guardarFecha(e.target.value) }
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control" 
                                value={hora}
                                onChange={ e => guardarHora(e.target.value) }
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={sintomas}
                                onChange={ e => guardarSintomas(e.target.value) }
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                { error.error ? <div class="alert alert-danger text-center p2"> Todos los campos son obligatorios </div> : null }                
            </div>
        </div>
    );
}

export default AgregarCita;