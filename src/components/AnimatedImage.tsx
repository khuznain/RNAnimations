import * as React from 'react';
import {Theme} from '@/themes';
import {createBox} from '@shopify/restyle';
import {ImageProps} from 'react-native';
import Animated, {AnimateProps} from 'react-native-reanimated';

const AnimatedImage = createBox<Theme, AnimateProps<ImageProps>>(
  Animated.Image,
);

export type AnimatedImageProps = React.ComponentProps<typeof AnimatedImage>;

export default AnimatedImage;
