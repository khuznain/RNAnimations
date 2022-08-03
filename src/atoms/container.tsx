import * as React from 'react';
//
import {Box} from '@/atoms';
import {BoxProps} from './box';

const Container: React.FC<BoxProps> = props => {
  return (
    <Box flex={1} bg="$background" {...props}>
      {props.children}
    </Box>
  );
};

export default Container;
