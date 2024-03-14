import { useState } from "react";
import "./App.css";

import { AuthenticationProvider } from "./components/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Protecting from "./pages/Protecting";

/////////////////////////////////////
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <Protecting>
                <MainPage
                  items={items}
                  setItems={setItems}
                  onAddItems={handleAddItems}
                  onDeleteItems={handleDeleteItem}
                />
              </Protecting>
            }
          />

          {/* <div className="App"> */}
          {/* <Weather />
          <Title />
          <Form onAddItems={handleAddItems} />
          <List items={items} onDeleteItems={handleDeleteItem} /> */}
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}
