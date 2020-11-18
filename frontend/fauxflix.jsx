import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
<<<<<<< HEAD
    const title = <h1>Faux AUTH TEST Flix</h1>
    ReactDOM.render(title, root);
=======
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
>>>>>>> auth
});