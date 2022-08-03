import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {Container} from '@/atoms';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function MainScreen({navigation}: Props) {
  return (
    <Container
      flex={1}
      justifyContent="center"
      bg="$headerBarBackground"
      alignItems="center"></Container>
  );
}
