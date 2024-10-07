
import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const ProjectCardBox = styled.article`
  position: relative;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: transparent;
  height: 100%;
  box-shadow: 0 4px 5px 3px var(--bg-shadow);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:before {
    content: "";
    background-color: #f6004c;
    background-image: linear-gradient(90deg, #f61b10, #ef0963);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.02);
    overflow: hidden;
    box-shadow: none;

    h3 {
      color: var(--txt-primary-active);
    }

    p {
      color: var(--txt-primary-active);
    }
  }
`;

export const ProjectCardItem = styled.li`
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    article:before {
      opacity: 0.8;
    }
  }
`;

export const ProjectCardBoxContent = styled.div`
  flex: 1 1 auto;
  padding-top: 1rem;
  z-index: 10;
`;

export const ProjectCardBoxDescription = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: var(--txt);
  text-align: justify;
`;

export const ProjectCardBoxThumbnail = styled.div`
  display: inline-block;
  width: 100%;
  z-index: 10;

  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
`;

export const ProjectCardBoxTitle = styled.h3`
  font-size: 20px;
  color: var(--txt-title);
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${device.desktop} {
    font-size: 24px;
  }
`;
// import styled from "styled-components";

// // Card container style
// export const CardContainer = styled.div`
//   width: 300px;
//   padding: 16px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// // Card image style
// export const CardImage = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   border-radius: 4px;
//   margin-bottom: 16px;
// `;

// // Card title style
// export const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #333;
//   margin-bottom: 8px;
//   font-weight: 600;
// `;

// // Description style
// export const CardDescription = styled.p`
//   font-size: 1rem;
//   color: #666;
// `;
