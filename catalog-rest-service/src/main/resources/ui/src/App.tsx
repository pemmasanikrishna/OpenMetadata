/*
  * Licensed to the Apache Software Foundation (ASF) under one or more
  * contributor license agreements. See the NOTICE file distributed with
  * this work for additional information regarding copyright ownership.
  * The ASF licenses this file to You under the Apache License, Version 2.0
  * (the "License"); you may not use this file except in compliance with
  * the License. You may obtain a copy of the License at

  * http://www.apache.org/licenses/LICENSE-2.0

  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Appbar from './components/app-bar/Appbar';
import { ToastContextProvider } from './contexts/ToastContext';
import AppRouter from './router/AppRouter';

const App: FunctionComponent = () => {
  return (
    <div className="main-container">
      <ToastContextProvider>
        <Router>
          <div className="content-wrapper" data-testid="content-wrapper">
            <Appbar />
            <AppRouter />
          </div>
        </Router>
      </ToastContextProvider>
    </div>
  );
};

export default App;
