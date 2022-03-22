import { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  fillColor: string;
  children?: never;
};

const SIZE = 26;

const Cadenas: FC<Props> = ({ fillColor }) => (
  <Svg width={SIZE} height={SIZE}>
    <Circle
      data-name="Ellipse 5"
      cx={SIZE / 2}
      cy={SIZE / 2}
      r={SIZE / 2}
      fill={fillColor}
    />
    <Path
      data-name="Trac\xE9 26"
      d="M13.5 21.568a1.6 1.6 0 0 1 1.629-1.713 1.625 1.625 0 0 1 1.671 1.713c0 1.448-1.211 2.917-1.671 2.917-.442 0-1.7-1.407-1.629-2.917Zm-.7-13.406c1.347-3.395 3.355-3.3 4.477 0s-1.812 10.972-2.148 10.972c-.318 0-3.668-7.577-2.321-10.972Z"
      fill="#fff"
    />
  </Svg>
);

export default Cadenas;
