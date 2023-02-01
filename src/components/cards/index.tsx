import styles from "./card.module.css";

interface apiTwo {
  b: {
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
  };
}
export function Cards({ b }: apiTwo) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.campo}>
          <h1>{b.name}</h1>
          <h3>{`${b.main ? b.main.temp : null} ºC`} </h3>
          <img
            src={`https://openweathermap.org/img/wn/${b.weather[0].icon}@4x.png`}
          />
          <p>{b.weather ? b.weather[0].description : null}</p>
        </div>
      </div>
    </>
  );
}
