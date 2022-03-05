import styled from "styled-components";

export const HeaderStyled = styled.div `

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4vw;
  background-color: #1a1923;
  margin: auto;

`
export const SearchAndLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 0 2vw;
`
export const Logo = styled.div`
  font-weight: bolder;
  font-size: 1.5vw;
  color: white;
`
export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1.5vw;
`

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #8f8f8f;
`

export const SearchInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SyncSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: 20vw;
  overflow-x: hidden;
  position: absolute;
  top: 3vw;
  z-index: 1;
  ::-webkit-scrollbar
  {
    width: 0;
  }
`
