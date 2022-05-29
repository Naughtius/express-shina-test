interface IConfig {
  API_URL: string;
  YANDEX_MAP_API_URL: string;
}

const config: IConfig = {
  API_URL: "https://express-shina.ru/",
  YANDEX_MAP_API_URL:
    "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=65827952-9336-45eb-b19e-5ab847d81d98",
};

export default config;
