import React, {useCallback, useEffect, useRef} from 'react';
import {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//
import AnimatedScrollView from '@/components/AnimatedScrollView';
import AnimatedBox from '@/components/AnimatedBox';
import FeatherIcon from '@/components/icon';
import {TouchableOpacity} from '@/atoms';

interface Item {
  id: number;
}

export default function MainScreen() {
  const inset = useSafeAreaInsets();
  const ref = useRef<boolean>(true);
  const [items, setItems] = React.useState<Item[]>(
    new Array(6).fill(0).map((_, index) => ({id: index})),
  );

  useEffect(() => {
    ref.current = false;
  }, []);

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nexItemId = (currentItems[currentItems.length - 1].id ?? 0) + 1;
      return [...currentItems, {id: nexItemId}];
    });
  }, []);

  const onDelete = useCallback((itemId: number) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  }, []);

  return (
    <>
      <TouchableOpacity
        width={60}
        height={60}
        onPress={onAdd}
        backgroundColor="black"
        borderRadius="lg"
        zIndex={10}
        right="5%"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={50}>
        <FeatherIcon size={30} color="white" name="plus" />
      </TouchableOpacity>
      <AnimatedScrollView flex={1} style={{paddingVertical: inset.top}}>
        {items.map(({id}, index) => (
          <AnimatedBox
            entering={ref ? FadeIn.delay(index * 100) : FadeIn}
            exiting={FadeOut}
            layout={Layout.delay(100)}
            onTouchEnd={() => onDelete(id)}
            shadowOffset={{width: 0, height: 10}}
            alignSelf="center"
            shadowColor="black"
            shadowOpacity={0.15}
            shadowRadius={20}
            elevation={5}
            borderRadius="sm"
            width="90%"
            my="md"
            height={80}
            bg="blue"
            key={id}
          />
        ))}
      </AnimatedScrollView>
    </>
  );
}
