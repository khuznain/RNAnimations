import React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text} from '@/atoms';
import AnimatedBox from './AnimatedBox';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {height, width} = Dimensions.get('window');

const SIZE = width * 0.7;
//
const Page: React.FC<PageProps> = ({title, index, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{scale: scale}],
    };
  }, []);

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY: translateY}],
    };
  }, []);

  return (
    <Box
      height={height}
      width={width}
      justifyContent="center"
      alignItems="center"
      style={{backgroundColor: `rgba(0,0,256,0.${index})`}}>
      <AnimatedBox
        justifyContent="center"
        alignItems="center"
        bg="blue"
        height={SIZE}
        width={SIZE}
        style={rStyle}
      />
      <AnimatedBox position="absolute" style={rTextStyle}>
        <Text
          letterSpacing={2}
          textTransform="capitalize"
          fontWeight="700"
          color="white"
          fontSize={70}>
          {title}
        </Text>
      </AnimatedBox>
    </Box>
  );
};

export default Page;
