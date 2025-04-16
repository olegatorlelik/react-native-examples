import styles from './styles';
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

const PADDING = 16;

const Gradient = () => {
  const width = styles.component.width;
  const height = styles.component.height;
  const cardWidth = width - PADDING;
  const cardHeight = height - PADDING;

  return (
    <Canvas style={styles.component}>
      <RoundedRect
        x={8}
        y={8}
        width={cardWidth}
        height={cardHeight}
        color={'white'}
        r={16}>
        <SweepGradient
          c={vec(width / 2, height / 2)}
          colors={['cyan', 'magenta', 'yellow', 'cyan']}
        />
        <BlurMask blur={10} style="solid" />
      </RoundedRect>
    </Canvas>
  );
};

export default Gradient;
