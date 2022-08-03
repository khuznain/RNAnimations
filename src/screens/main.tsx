import React from 'react';

import {Container, Text} from '@/atoms';
import SlidingCounter from '@/components/SlidingCounter';

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <SlidingCounter />
    </Container>
  );
}
