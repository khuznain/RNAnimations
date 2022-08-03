import * as React from 'react'
//
import { Box } from '@/atoms'
import { BoxProps } from './box'

const Container: React.FC<BoxProps> = props => {
  return (
    <Box {...props} flex={1} bg="$background">
      {props.children}
    </Box>
  )
}

export default Container
