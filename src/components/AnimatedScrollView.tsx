import Animated, {AnimateProps} from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {ScrollViewProps} from 'react-native';
import {Theme} from '@/themes';

const AnimatedScrollView = createBox<Theme, AnimateProps<ScrollViewProps>>(
  Animated.ScrollView,
);

export default AnimatedScrollView;
