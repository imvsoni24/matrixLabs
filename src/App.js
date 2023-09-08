import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css"
import Search from "./components/Search";

function App() {
  const [active,setActive] = useState("token")
  return (
    <div >
      <div className="App">
        <Sidebar setActive={setActive} />
        <Search active={active}/>
      </div>
      <div className="AppBottom"></div>
    </div>
  );
}

export default App;
