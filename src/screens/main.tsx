import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {Box, Container} from '@/atoms';
import {MotiView} from 'moti';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

const LoadingIndicator = ({size}: {size: number}) => (
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
    }}></MotiView>
);

export default function MainScreen({navigation}: Props) {
  return (
    <Container justifyContent="center" bg="black" alignItems="center">
      <LoadingIndicator size={100} />
    </Container>
  );
}
