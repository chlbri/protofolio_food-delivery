import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn';

export type HeartRatio = 'full' | 'half' | 'empty';

type Props = {
  width?: number;
  height?: number;
  ratio?: HeartRatio;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

const Heart: FC<Props> = ({
  width = 18,
  height = 15,
  ratio = 'full',
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  const tailwind = useTailwind();
  return (
    <Svg
      data-name="Heart (18x15)"
      {...{ width, height }}
      style={{ marginTop, marginBottom, marginLeft, marginRight }}
    >
      <Path
        d="M9 2.573a5.2 5.2 0 0 1 7.579-1.553c1.895 1.553 1.895 4.66 0 7.766C15.253 11.115 11.842 13.446 9 15c-2.842-1.554-6.253-3.884-7.579-6.214-1.895-3.106-1.895-6.213 0-7.766A5.2 5.2 0 0 1 9 2.573Z"
        fill={
          tailwind(ratio === 'full' ? 'text-accent' : 'text-white')
            .color as any
        }
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Heart;
