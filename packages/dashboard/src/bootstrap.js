import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If we are in development and in isolation,
// call mount inmediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot); //se agrega un segundo argumento para correr en aislamiento la actualización del browser history
    }
}

// We are running through container
// and we should export the mount function

export { mount };