import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  margin: auto;
`;

export const Ports = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px auto;
  max-width: 740px;
`;

export const Text = styled.h3`
  font-weight: 100;
  font-size: 22px;
  color: #4d4e4c;
`;

export const Circle = styled.div``;

export const CircleRow = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressiveBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 741px;
`;

export const Bar = styled.div`
  margin: 20px auto 0;
  width: 700px;
  background-color: #82a1c0;
  position: relative;
`;

type Props = {
  progress: number;
};
const dynamicStyle = ({ progress }: Props) => css`
  width: ${progress || 0}%;
  transition: width 2s;
`;

export const LoadingBar = styled.div`
  ${dynamicStyle}
  display: blok;
  height: 30px;
  background-color: #345270;
`;

const dynamicSVGStyle = ({ progress }: Props) => css`
  width: ${progress}%;
  transition: width 2s;
`;

export const ContainerSVG = styled.span`
  ${dynamicSVGStyle}
  justify-content: end;
  display: flex;
  background-color: #fff;
`;

export const ProgressMessage = styled.p`
  text-align: center;
`;
