/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test"
        REACT_APP_BACKEND_API_URL: "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=8"
    }
}