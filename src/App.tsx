import { useState } from "react";
import axios from "axios";
import "./global.css";
import { api, API_KEY } from "./lib/api";
import { Cards } from "./components/cards";

// export const getWeather = async (query: string) => {
//   const response = await axios.get(URL, {
//     params: {
//       q: query,
//       units: "metric",
//       APPID: API_KEY,
//     },
//   });
// };

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
  console.log(weather.name);
  return (
    <>
      <div className="title">
        <h1>Confira o Clima na sua cidade!</h1>
      </div>

      <div className="busca">
        <form className="campo">
          <input
            type="text"
            placeholder="Digite aqui o nome da sua cidade"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onFocus={() => setCard(false)}
          />
          <button onClick={search}>buscar</button>
        </form>
        {card ? (
          <div className="card">{weather && <Cards b={weather} />}</div>
        ) : null}
      </div>
    </>
  );
}
