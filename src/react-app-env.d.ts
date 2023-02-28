/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    REACT_APP_API_URL: string;
    REACT_APP_WS_URL: string;
  }
}
