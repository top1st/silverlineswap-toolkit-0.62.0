import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.span`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink>
      {/* <LogoRound width="24px" mr="8px" /> */}
      <img src="/images/tokens/sln.png" width="24px" alt="Token icon" />
      <Text color={color} ml="8px" >{`$${cakePriceUsd.toFixed(4)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
