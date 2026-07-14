import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import ProdutoDetalhes from './pages/ProdutoDetalhes';
import Finalizado from './pages/Finalizado';
import Pedidos from './pages/Pedidos';
import NotFound from './pages/NotFound';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div className="app-root">
                <Header />
                <div className="page-root">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
                        <Route path="/carrinho" element={<Carrinho />} />
                        <Route path="/pedidos" element={<Pedidos />} />
                        <Route path="/finalizado" element={<Finalizado />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;