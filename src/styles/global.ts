import { createGlobalStyle } from "styled-components";
import colors from "./colors";


export default createGlobalStyle`
*{
  //height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html{
  flex: 1
}

body{
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  background: ${colors.light};
  color: ${colors.grayMedium};
  font: 300 16px sans-serif;
  #containerLoading{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  #Loading{
      border: 16px solid ${colors.light}; /* Light grey */
      border-top: 16px solid ${colors.default}; /* Blue */
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

    }
}
`
