import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import AnimatedBox from './AnimatedBox';

interface DotProps {
  index: number;
  activeDotIndex: Animated.SharedValue<number>;
}

const Dot: React.FC<DotProps> = ({activeDotIndex, index}) => {
  //
  const rStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming(isActive ? 'black' : 'white', {
        duration: 150,
      }),
    };
  });

  return (
    <AnimatedBox
      margin="xs"
      borderRadius="md"
      borderWidth={1}
      borderColor="black"
      width={20}
      height={20}
      style={rStyle}
    />
  );
};

export default Dot;
