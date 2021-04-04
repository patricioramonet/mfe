import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// nombre de clases para CSS, proporcionará aislamiento de estilos para
// los componentes trabajados dentro del MFE.
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});


export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>

    );
};