import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Work from "./components/work/Work";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import Editor from "./components/editor/Editor";
import Create from "./components/editor/create/Create";
import Edit from "./components/editor/edit/Edit";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setupStore();
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="work" element={<Work />} />
                        <Route path="create" element={<Create />} />
                        <Route path="edit" element={<Edit />}>
                            <Route path=":editId" element={<Edit />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
