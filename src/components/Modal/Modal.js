// import styled from "styled-components"

// export const ModalContainer=styled.div`

// `
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  color: var(--txt);
  position: absolute;
  right: 0;
  top: 0;
  color: var(--txt);
  cursor: pointer;
  z-index: 100;
`;

export const ModalClose = styled.button`
  margin-left: auto;
  right: 0;
  background-color: red;
  border-radius: 0 0 0 100%;
  border: 1px solid transparent;
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 8%);
  width: 45px;
  height: 45px;
  padding: 0;
  cursor: pointer;
  z-index: 100;
  padding-left: 5px;

  svg {
    fill: #fff;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  z-index: 10;
  background-color: var(--bg-secondary);
  border: var(--modal-border);
  border-radius: 0.25rem;
  opacity: 1;
  color: var(--txt);
`;
