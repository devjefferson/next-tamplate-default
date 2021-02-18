import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
position: relative;
z-index: 100;
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: ${colors.grayMedium};
  font-weight: 500;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: ${colors.default};
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: ${colors.light};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: ${colors.light};
}

.dropdown:hover .dropdown-content {
  display: block;
}
`;
