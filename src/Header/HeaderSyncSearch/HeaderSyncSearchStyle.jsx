import styled from "styled-components";

export const RenderSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: 20vw;
  background: ${props => props.theme.background_header};
  overflow-x: hidden;
  position: absolute;
  top: 3.5vw;
  right: 6.5vw;
  z-index: 1;
  transition : .1s;
  
  ::-webkit-scrollbar {
    width: 0;
  }

  //1200px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 25vw;
    height: 37vw;
    top: 6vw;
    right: 7vw;
  }
  
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 35vw;
    height: 45vw;
    top: 8vw;
    right: 6vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 80vw;
    height: 93vw;
    top: 25vw;
    right: 10vw;
    z-index: 1000;
  }
`

export const SearchItems = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: content-box;
  padding: .1vw 1vw;
  transition: .1s;

  :hover {
    background: rgba(108, 108, 108, 0.29);
  }

  img {
    width: 4vw;
    padding: .5vw 0;
  }

  section {
    width: 11vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    white-space: break-spaces;
    color: ${props => props.theme.color_header_sync_search};
    padding: .5vw .5vw;
    transition: .1s;
  }

  //1200
  @media (max-width: ${props => props.theme.responsive.medium_screen}) {

    img {
      width: 8vw;
      padding: .5vw 0;
    }

    section {
      width: 18vw;
      padding: .5vw 1vw;
    }

    h4 {
      font-size: 1.5vw;
    }
    p {
      font-size: 1.3vw;
    }
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    img {
      width: 10vw;
      padding: 1vw .5vw;
    }

    section {
      width: 24vw;
      padding: .5vw 1vw;
    }
    
    h4 {
      font-size: 2vw;
    }
    p {
      font-size: 1.9vw;
    }
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    img {
      width: 20vw;
      padding: 1.5vw 0;
    }
    section {
      width: 45vw;
      padding: .5vw 1vw;
    }

    h4 {
      font-size: 4.5vw;
    }
    p {
      font-size: 3.5vw;
    }
  }

`
export const HeaderSearchSpinner = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SyncSearchNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color_search_component};
`