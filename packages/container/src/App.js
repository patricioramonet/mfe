import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

// nombre de clases para CSS, proporcionará aislamiento de estilos para
// los componentes trabajados dentro del MFE.
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});


export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};