import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory(); //browser history object

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname, //se agrega para indicar la ruta inicial desde el browser route history
            onNavigate: ({ pathname: nexPathName }) => { //nexPathName es la ruta de la subapp
                const { pathname } = history.location; //pathname es la ruta actual del host.
                if (pathname !== nexPathName) { //Para no caer en loop infinito de actualización por callback entre el host y remote.
                    history.push(nexPathName); //Actualiza en host cuando ocurra un evento de onNavigate desde una SubApp 
                }
            },
            onSignIn: () => {
                console.log('User signed in');
            }
        });

        history.listen(onParentNavigate);
    }, []); //el arreglo vacío como segundo argumento en useEffect hará que solo intente correr esta función cuando se renderice por primera vez marketingApp en la pantalla.

    return <div ref={ref} />
}