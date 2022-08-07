import React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text} from '@/atoms';
import {PageInterface} from '@/constants';
import AnimatedImage from './AnimatedImage';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import AnimatedBox from './AnimatedBox';

interface PageProps {
  page: PageInterface;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get('window');
const CIRCLE_WIDTH = width / 2;

const Page: React.FC<PageProps> = ({page, translateX, index}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{rotate: `${progress * Math.PI}rad`}],
    };
  });

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      px="lg"
      bg="$background"
      width={width}
      height={height}>
      <Box
        justifyContent="center"
        alignItems="center"
        aspectRatio={1}
        width={CIRCLE_WIDTH}
        style={{marginBottom: 120}}>
        <AnimatedBox
          width="100%"
          height="100%"
          backgroundColor="white"
          style={[{borderRadius: CIRCLE_WIDTH / 2}, rCircleStyle]}
        />
        <AnimatedImage
          style={rImageStyle}
          resizeMode="contain"
          position="absolute"
          aspectRatio={1}
          height={height * 0.5}
          source={page.source}
        />
      </Box>
      <Text textAlign="center" marginBottom="md" fontWeight="700" fontSize={35}>
        {page.title}
      </Text>
      <Text textAlign="center" color="black" fontSize={15}>
        {page.description}
      </Text>
    </Box>
  );
};

export default Page;
