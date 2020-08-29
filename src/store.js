import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk), 
        // Sirve para que la extensión Redux devtools detecte nuestra aplicación
        // y si el navegador no tiene la extensión, no se caiga la aplicación
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store; 