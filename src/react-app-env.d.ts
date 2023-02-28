/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
       REACT_APP_API_URL: "http://localhost:3001/graphql"
       REACT_APP_WS_URL: "ws://localhost:3001/graphql"

    }
}