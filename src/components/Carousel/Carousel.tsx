/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
  ViewToken,
} from 'react-native';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel: React.FC<ICarousel> = ({images, onDoublePress = () => {}}) => {
  const windowWidth = useWindowDimensions().width;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const renderPaginationDot = useCallback(
    (index: number) => (
      <View
        key={index}
        style={[
          styles.paginationDot,
          {
            backgroundColor: index === activeImageIndex ? '#1B204C' : '#D3DBDB',
            width: index === activeImageIndex ? 50 : 10,
          },
        ]}
      />
    ),
    [activeImageIndex],
  );

  const renderItem = useCallback(
    ({item}: {item: string}) => (
      <DoublePressable onDoublePress={onDoublePress}>
        <Image
          source={{uri: item}}
          style={[styles.image, {width: windowWidth}]}
          resizeMode="cover"
        />
      </DoublePressable>
    ),
    [onDoublePress, windowWidth],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        snapToAlignment="center"
        snapToInterval={windowWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 51}}
        keyExtractor={(_, index) => index.toString()}
      />
      <View style={styles.paginationContainer}>
        {images.map((_, index) => renderPaginationDot(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 4 / 5.5,
    borderRadius: 30,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default React.memo(Carousel);
