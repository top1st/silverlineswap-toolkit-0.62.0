import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 190px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img className="mobile-icon" src="/logo.png" alt="Logo" />
      <img className="desktop-icon" src="/images/header-logo.png" alt="Logo" />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
