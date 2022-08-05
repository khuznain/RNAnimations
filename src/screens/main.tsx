import React from 'react';
import Animated, {
  AnimateProps,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {ScrollViewProps} from 'react-native';
import {Theme} from '@/themes';
import {Container} from '@/atoms';
import Page from '@/components/Page';

const WORDS = ['what', 'is', 'up', 'dude'];

const StyledScrollView = createBox<Theme, AnimateProps<ScrollViewProps>>(
  Animated.ScrollView,
);

export default function MainScreen() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Container justifyContent="center" alignItems="center">
      <StyledScrollView
        onScroll={scrollHandler}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        flex={1}>
        {WORDS.map((word, index) => (
          <Page
            key={index.toString()}
            title={word}
            index={index}
            translateX={translateX}
          />
        ))}
      </StyledScrollView>
    </Container>
  );
}
