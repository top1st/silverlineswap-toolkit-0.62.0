import styled from "styled-components";
import { Flex } from "../Box";

const StyledSubMenuItems = styled(Flex)<{ $isMobileOnly: boolean }>`
  ${({ theme }) => theme.mediaQueries.sm} {
    ${({ $isMobileOnly }) => ($isMobileOnly ? "display:none" : "")};
  }
  flex-grow: 1;
  background-color: transparent;
  padding-top: 46px;
  box-shadow: none;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .submenu-item {
    &:first-child {
      margin-right: 110px;
    }
  }
`;

export default StyledSubMenuItems;
