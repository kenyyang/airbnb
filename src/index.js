import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import 'antd/dist/reset.css';
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import APP from '@/APP';
import store from '@/store'
import theme from './assets/theme';
import "@/assets/css/common.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading....">
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <APP />
                </HashRouter>
            </ThemeProvider>
        </Provider>
    </Suspense>
);
