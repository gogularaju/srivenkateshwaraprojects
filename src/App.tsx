import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminQuotationGenerator from './components/AdminQuotationGenerator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Secret URL only you know */}
        <Route path="/admin/quote" element={<AdminQuotationGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}