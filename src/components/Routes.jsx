import React from 'react';
import { Routes as Switch, Route, Navigate, } from 'react-router-dom';

import { Results } from './Results';
//useRoutes(['/home', '/users', '/widgets'].map(path => ({path, element})))
export const Routes = () => {
  return (
    <div className='p-4'>
        <Switch>
          <Route path='/' element={<Navigate to="/search"/>}></Route>
          <Route path='/search' element={<Results/>}></Route>
          <Route path='/images' element={<Results/>}></Route>
  
          {/* <Route path={["/search","/news"]} element={<Results/>}></Route> */}
        </Switch>
        
    </div>
  )
}
