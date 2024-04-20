import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
// import { SketchPicker } from "react-color";

function App() {
  const [groups, setGroups] = useState([]);




  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home groups={groups} />} />
            <Route path="/" element={<Home groups={groups} />} />
            <Route
              path="/settings"
              element={<Settings setGroups={setGroups} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
