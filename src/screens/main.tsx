import React, {useCallback} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {Container, Box, Text} from '@/atoms';

import AnimatedScrollView from '@/components/AnimatedScrollView';
import {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {PAGES} from '@/constants';
import Page from '@/components/Page';
import FeatherIcon from '@/components/icon';
import Dot from '@/components/Dots';

const {width} = Dimensions.get('window');

export default function MainScreen() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const scrollRef = useAnimatedRef<ScrollView>();

  const onIconPress = useCallback(() => {
    if (activeIndex.value === PAGES.length - 1) return;
    scrollRef.current?.scrollTo({x: width * (activeIndex.value + 1)});
  }, []);

  return (
    <Container justifyContent="center" alignItems="center">
      <AnimatedScrollView
        ref={scrollRef as any}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled>
        {PAGES.map((page, index) => (
          <Page
            key={index.toString()}
            index={index}
            translateX={translateX}
            page={page}
          />
        ))}
      </AnimatedScrollView>
      <Box flexDirection="row" mb="xl" width="100%" height={50}>
        <Box
          flex={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          {PAGES.map((_, index) => (
            <Dot
              activeDotIndex={activeIndex}
              index={index}
              key={index.toString()}
            />
          ))}
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing={1.7}
            fontSize={14}>
            Viw Board
          </Text>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
          <FeatherIcon onPress={onIconPress} name="arrow-right" size={24} />
        </Box>
      </Box>
    </Container>
  );
}
