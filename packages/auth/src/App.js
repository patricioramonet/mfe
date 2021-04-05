import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// nombre de clases para CSS, proporcionará aislamiento de estilos para
// los componentes trabajados dentro del MFE.
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});


export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
