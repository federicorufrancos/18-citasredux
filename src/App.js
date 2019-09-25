import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import AgregarCita from './componentes/AgregarCita';
import ListadoCitas from './componentes/ListadosCitas';
 
function App() {
  {/*this works as the same as content API, I'm declaring this provider and everything that is inside have access to the store*/}
  {/*Look that the name {store} matches with the one declared in the store.js */}
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">
            Administrador de Pacientas de Veterinaria
          </h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
