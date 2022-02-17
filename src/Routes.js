import { Routes, Route } from 'react-router-dom';
import { Dashboard, Invoices } from './pages';
import App from './App';

function MainRouter() {
    return (
        <Routes>
            <Route path="/app" element={<App />}>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="purchase-orders" element="">
                    <Route path=":purchaseOrderId" element="" />
                </Route>
                <Route path="deliveries" element="" />
                <Route path="finance">
                    <Route index element={
                        <main style={{ padding: "1rem" }}><p>Select a submenu</p></main>
                    } />
                    <Route path="invoices" element={<Invoices/>}>
                    </Route>
                    <Route path="settlements" element="">
                        <Route path=":settlementId" element="" />
                    </Route>
                </Route>
                <Route path="reports" element="" />
            </Route>
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            } />
        </Routes>
    );
}

export default MainRouter;