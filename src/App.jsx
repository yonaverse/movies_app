import { useState } from "react";
import Search from "./component/search";

const App = () => {
  const [searchterm, setSearchterm] = useState("");

  return (
    <main className="bg-[image:url('/assets/BG.png')]">
      <div className="pattern">
        <div className="wrapper">
          <header>
            <h1>
              <img
                src="/assets/logo.png"
                style={{ width: "80px", height: "90px" }}
                alt="logo"
              />
              <img src="/assets/image.png" alt="hero-image" />
              find <span className="text-gradient">movies</span> you'll enjoy
              without a hassle
            </h1>
          </header>
          <Search searchterm={searchterm} setSearchterm={setSearchterm} />
        </div>
      </div>
    </main>
  );
};

export default App;
