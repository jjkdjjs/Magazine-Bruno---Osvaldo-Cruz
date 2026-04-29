import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/carrinho" element={<Carrinho/>} />
                <Route path="/produtos" element={<Produtos/>} />
            </Routes>
        </BrowserRouter>
    )   
}

export default AppRoutes;