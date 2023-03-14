import { PinSVG } from "./pin";
import {
  CircleRow,
  Circle,
  ProgressiveBarContainer,
  Bar,
  LoadingBar,
  ContainerSVG,
} from "./styles";

type Props = {
  progress: number;
};

export const ProgressBar = ({ progress }: Props) => {
  const numberOfCircles = Array.from(Array(14).keys());

  const circles = numberOfCircles.map((index) => {
    return (
      <Circle key={index}>
        <svg width={50} height={30}>
          <mask id={`mask-${index}`}>
            <rect fill="white" width="100%" height="100%" />
            <circle
              cx={25}
              cy={15}
              r={index === 0 || index === numberOfCircles.length - 1 ? 12 : 5}
              stroke="black"
              strokeWidth="1"
              fill="black"
            />
          </mask>
          <rect
            mask={`url(#mask-${index})`}
            fill="#FFF"
            width="100%"
            height="100%"
          />
        </svg>
      </Circle>
    );
  });

  const svgProgress = (progress: number) => {
    if (progress < 8) {
      return 12.5;
    } else if (progress > 80 && progress < 98) {
      return progress + 2;
    } else if (progress >= 99) {
      return progress;
    }
    return progress + 4;
  };

  return (
    <ProgressiveBarContainer>
      <ContainerSVG progress={svgProgress(progress)}>
        <PinSVG />
      </ContainerSVG>
      <Bar>
        <LoadingBar progress={progress} />
        <CircleRow>{circles}</CircleRow>
      </Bar>
    </ProgressiveBarContainer>
  );
};
