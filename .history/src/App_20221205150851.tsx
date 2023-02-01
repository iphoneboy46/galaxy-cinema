import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import {publicRoutes} from './routes/publicRoutes'


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {
          publicRoutes.map((router,index)=>{
            
            const Page = router.component

            return(
              <Route key={index} path={router.path} element={<Page/>}>
                
              </Route>
            )
           
          })
        }
        
      </Routes>
    </div>
  );
}

export default App;
