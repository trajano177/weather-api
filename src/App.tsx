import { useState } from "react";
import "./global.css";
import { api } from "./lib/api";
import { Cards } from "./components/cards";
import foto from "././assets/search.png";

export interface api {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export function App() {
  const [query, setQuery] = useState("");
  const [card, setCard] = useState(false);
  const [weather, setWeather] = useState<api>({} as api);
  async function search() {
    try {
      const response = await api.get("data/2.5/weather?", {
        params: {
          q: query,
          appid: "2cb907c2235f9fbff3d2c4a2b3a0fb56",
          units: "metric",
          lang: "pt_br",
        },
      });

      setWeather(response.data);
    } finally {
      setCard(true);
    }
  }
  return (
    <>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave w4"></div>
      </section>

      <div className="busca">
        <div className="campo">
          <input
            type="text"
            placeholder="Confira o clima na sua cidade!"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onFocus={(e) => setCard(false)}
          />
          <button onClick={search}>
            <img src={foto} />
          </button>
        </div>
        {card ? (
          <div className="card">{weather && <Cards b={weather} />}</div>
        ) : null}
      </div>
    </>
  );
}
