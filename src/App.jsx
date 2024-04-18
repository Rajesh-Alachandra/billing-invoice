import React from "react";
import Center from "./components/Center";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import InvoiceInfo from "./components/InvoiceInfo";
import invoiceSlice from "./redux/invoiceSlice";
import { useDispatch } from "react-redux";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(invoiceSlice.actions.deleteInvoice({ id: id }));
  };

  return (
    <>
      <div className=" dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb]">
        <Header />
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<Center />} path="/center" />
            <Route
              element={<InvoiceInfo onDelete={onDelete} />}
              path="/center/invoice"
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
