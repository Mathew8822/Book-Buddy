import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../Books";
import SingleBook from "../SingleBook";
import Account from "../Account";
import Home from "../Home";

const Router = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/account" element={<Account token={token} setToken={setToken} />} />
    </Routes>
  );
};

export default Router;
