import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import tailwindConfig from '../../../tailwind.config';

type Props = {
  children?: never;
};


const Arrow: FC<Props> = () => (
  <Svg width={38.481} height={36.651}>
    <Path
      data-name="Trac\xE9 30"
      d="M25.49 29.151 0 15.001 25.981 0 13.594 14.835Z"
      fill={tailwindConfig.theme.colors.white}
    />
  </Svg>
);

export default Arrow;
