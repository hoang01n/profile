import {Link} from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--txt-title);

  span:first-child {
    color: var(--logo-primary);
  }
`;
