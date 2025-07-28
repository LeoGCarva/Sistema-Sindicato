import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';

export function App() {
  return (
    <> 
    <BrowserRouter >
      <Switch>
        <Route path='/' element={<UserRoutes />}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}
