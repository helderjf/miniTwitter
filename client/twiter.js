import {Twits} from '../imports/api/twits.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../imports/ui/components/app.jsx';
import {store} from '../imports/store.js';

Meteor.startup(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
});

