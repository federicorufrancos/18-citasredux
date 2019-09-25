import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citasActions';

const ListadoCitas = () => {
    //getting access to the redux store of citas
    const citas = useSelector((state) => state.citas);
    console.log('citas ', citas);

    const mensaje = Object.keys(citas.citas).length === 0 ? 'No Hay Citas' : 'Administrar las Citas Aqui';
    const dispatch = useDispatch();

    return ( 
        <div class="card mt-5">
            <div class="card-body">
                <h2 class="card-title text-center">
                    {mensaje}
                </h2>
                <div class="lista-citas">
                    {citas.citas.map(cita => (
                        <div key={cita.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{cita.mascota}</h3>
                                <p className="card-text"><span>Nombre Dueño:</span> {cita.propietario}</p>
                                <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
                                <p className="card-text"><span>Hora:</span> {cita.hora}</p>
                                <p className="card-text"><span>Sintomas:</span> <br/>
                                    {cita.sintomas}
                                </p>
                                <button 
                                    className="btn btn-danger" onClick={()=> dispatch(borrarCitaAction(cita.id))}>Borrar &times;
                                </button>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
        </div>        
    );
}
 
export default ListadoCitas;