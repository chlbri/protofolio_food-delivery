import { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import tailwindConfig from '../../../tailwind.config';

type Props = {
  fillColor: string;
  children?: never;
};

const SIZE = 21;

const Signal: FC<Props> = ({ fillColor }) => (
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
      d="M9.453 15.097a1.119 1.119 0 0 1 1.138-1.2 1.138 1.138 0 0 1 1.17 1.2c0 1.014-.848 2.042-1.17 2.042a2.241 2.241 0 0 1-1.138-2.042Zm-.487-9.384c.943-2.376 2.348-2.307 3.134 0s-1.274 7.68-1.509 7.68-2.568-5.303-1.625-7.68Z"
      fill={tailwindConfig.theme.colors.white}
    />
  </Svg>
);

export default Signal;
