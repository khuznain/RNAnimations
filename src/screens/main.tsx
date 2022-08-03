import {Easing} from 'react-native-reanimated';
import FeatherIcon from '@/components/icon';
import {StyleSheet} from 'react-native';
import {Box, Container} from '@/atoms';
import {MotiView} from 'moti';
import React from 'react';

const _color = '#6E01Ef';
const _size = 100;

export default function MainScreen() {
  return (
    <Container
      justifyContent="center"
      backgroundColor="white"
      alignItems="center">
      <Box justifyContent="center" alignItems="center" style={styles.dot}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 0.7, scale: 1}}
              animate={{opacity: 0, scale: 2}}
              transition={{
                type: 'timing',
                duration: 2000,
                loop: true,
                delay: index * 300,
                repeatReverse: false,
                easing: Easing.out(Easing.ease),
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <FeatherIcon name="phone-outgoing" color="white" size={32} />
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
    color: _color,
  },
});
