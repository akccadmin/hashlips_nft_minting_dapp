import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 30px;
  font-weight: 500;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #000000;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 35px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #000000;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 30px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #000000;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
/*export const navbartext = styled.a`
      margin-left: 20px;
    cursor: pointer;
    font-size: 24px!important;
    color: #fff!important;
    text-shadow: #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px;
`*/

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content:space-around;
margin: 40px;
font-size: 24px!important;
    color: #fff!important;
    text-shadow: #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px;
`;