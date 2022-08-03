import React from 'react';

import {Container, Text} from '@/atoms';

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <Text fontWeight="700" letterSpacing={2} fontSize={40}>
        Animations
      </Text>
    </Container>
  );
}
