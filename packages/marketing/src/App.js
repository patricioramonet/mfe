import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// nombre de clases para CSS, proporcionará aislamiento de estilos para
// los componentes trabajados dentro del MFE.
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma' //revisar (no actualizó la clase autogenerada en producción)
});

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}