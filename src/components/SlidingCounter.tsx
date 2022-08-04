import React from 'react';
import {StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Box} from '@/atoms';
import FeatherIcon from './icon';
import AnimatedBox from './AnimatedBox';

const ICON_SIZE = 20;
const BUTTON_WIDTH = 170;
const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

const clamp = (value: number, min: number, max: number) => {
  'worklet';
  return Math.min(Math.max(value, min), max);
};

const SlidingCounter = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onPanGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: event => {
        translateX.value = clamp(
          event.translationX,
          -MAX_SLIDE_OFFSET,
          MAX_SLIDE_OFFSET,
        );

        translateY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET);
      },
      onEnd: () => {
        translateX.value = withSpring(0, {stiffness: 100});
        translateY.value = withSpring(0);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);

  const rPlusMinusIconStyle = useAnimatedStyle(() => {
    const opacityX = interpolate(
      translateX.value,
      [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
      [0.4, 0.8, 0.4],
    );

    const opacityY = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [1, 0],
    );

    return {
      opacity: opacityX * opacityY,
    };
  }, []);

  const rCloseIconStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [0, 0.8],
    );
    return {
      opacity: opacity,
    };
  }, []);

  return (
    <Box
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      bg="counterBackground"
      height={60}
      width={BUTTON_WIDTH}
      borderRadius="lg">
      <AnimatedBox style={rPlusMinusIconStyle}>
        <FeatherIcon name="minus" color="white" size={ICON_SIZE} />
      </AnimatedBox>
      <AnimatedBox style={rCloseIconStyle}>
        <FeatherIcon name="x" color="white" size={ICON_SIZE} />
      </AnimatedBox>
      <AnimatedBox style={rPlusMinusIconStyle}>
        <FeatherIcon name="plus" color="white" size={ICON_SIZE} />
      </AnimatedBox>
      <Box
        justifyContent="center"
        alignItems="center"
        style={{...StyleSheet.absoluteFillObject}}>
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <AnimatedBox
            height={50}
            width={50}
            style={[
              {
                borderRadius: 25,
                backgroundColor: '#232323',
                position: 'absolute',
              },
              rStyle,
            ]}
          />
        </PanGestureHandler>
      </Box>
    </Box>
  );
};

export default SlidingCounter;
