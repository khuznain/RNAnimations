import React from 'react';

import {Container, Text} from '@/atoms';

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <Text letterSpacing={2} fontWeight="700" fontSize={30}>
        Animations
      </Text>
    </Container>
  );
}
