import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';



// Mount function to start up the app
//se agrega segundo argumento de history para ejecución en aislamiento del MFE,
//se agrega tercer argumento de inicial path para tener una ruta raiz 
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    }); //si defaultHistory es proporcionado lo usaremos, sino significa que se está ejecutando desde el container.

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDom.render(<App onSignIn={onSignIn} history={history} />, el);

    return { //retornaremos una función que permita al host comunicar al remote actualizaciones en history
        onParentNavigate({ pathname: nexPathName }) {
            const { pathname } = history.location;

            if (pathname !== nexPathName) {
                history.push(nexPathName); // se actualiza el history del remote.
            }
        }
    };
};


// If we are in development and in isolation,
// call mount inmediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() }); //se agrega un segundo argumento para correr en aislamiento la actualización del browser history
    }
}


// We are running through container
// and we should export the mount function

export { mount };