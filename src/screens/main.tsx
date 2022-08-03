import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FeatherIcon from '@/components/icon';
import {Box, Container} from '@/atoms';
import {MotiView, View} from 'moti';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Easing} from 'react-native-reanimated';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

const _color = '#6E01Ef';
const _size = 100;

const PhoneRing = ({size}: {size: number}) => (
  <MotiView
    from={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 0,
      shadowOpacity: 0.5,
    }}
    animate={{
      width: size + 20,
      height: size + 20,
      borderRadius: (size + 20) / 2,
      borderWidth: size / 10,
      shadowOpacity: 1,
    }}
    transition={{
      type: 'timing',
      duration: 500,
      loop: true,
    }}
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: size / 10,
      borderColor: '#fff',
      shadowColor: '#fff',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 10,
    }}
  />
);

export default function MainScreen({navigation}: Props) {
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
