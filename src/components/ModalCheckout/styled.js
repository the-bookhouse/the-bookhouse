import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 40vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 3;
  transition: opacity 0.3s ease-in-out;

  img {
    max-height: 100px;
  }

  h2 {
    font-family: "Catamaran", sans-serif;
    font-size: 24px;
    color: #333;
  }

  ion-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  p {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
