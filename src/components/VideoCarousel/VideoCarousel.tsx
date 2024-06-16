/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ViewToken,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer'; // Assuming you have a VideoPlayer component
import Icon from 'react-native-vector-icons/Ionicons';

interface IVideoCarousel {
  videos: string[]; // Array of video URIs
  onDoublePress?: () => void;
}

const { width: windowWidth } = Dimensions.get('window');

const VideoCarousel: React.FC<IVideoCarousel> = ({
  videos,
  onDoublePress = () => {},
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [pausedIndex, setPausedIndex] = useState<number | null>(null); // Track paused video index
  const [muted, setMuted] = useState(false);
  const videoRefs = useRef<{ [key: number]: VideoPlayer | null }>({});

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index || 0;
        setActiveVideoIndex(index);
        setPausedIndex(null); // Ensure newly visible video starts playing
      }
    },
  ).current;

  const togglePlayPause = useCallback(
    (index: number) => {
      if (index === pausedIndex) {
        setPausedIndex(null); // Resume video if it's paused
      } else {
        setPausedIndex(index); // Pause video if it's playing
      }
    },
    [pausedIndex],
  );

  const toggleMute = useCallback(() => {
    setMuted(prevMuted => !prevMuted);
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => (
      <DoublePressable onDoublePress={onDoublePress}>
        <View style={styles.videoContainer}>
          <VideoPlayer
            ref={ref => (videoRefs.current[index] = ref)}
            uri={item}
            width={windowWidth}
            paused={index !== activeVideoIndex || pausedIndex === index}
            muted={muted}
          />
          {index === activeVideoIndex && (
            <View style={styles.overlay}>
              <Pressable
                style={styles.playPauseButton}
                onPress={() => togglePlayPause(index)}>
                <Icon
                  name={pausedIndex === index ? 'play' : 'pause'}
                  size={50}
                  color="white"
                />
              </Pressable>
              <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
                <Icon
                  name={muted ? 'volume-mute' : 'volume-high'}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </DoublePressable>
    ),
    [onDoublePress, pausedIndex, muted, togglePlayPause, toggleMute, activeVideoIndex],
  );

  const renderPaginationDot = useCallback(
    (index: number) => (
      <View
        key={index}
        style={[
          styles.paginationDot,
          {
            backgroundColor:
              index === activeVideoIndex ? '#1B204C' : '#D3DBDB',
              width: index === activeVideoIndex ? 50 : 10,
          },
        ]}
      />
    ),
    [activeVideoIndex],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        horizontal
        snapToAlignment="center"
        snapToInterval={windowWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 }}
        keyExtractor={(item, index) => index.toString()} // Utilize index in keyExtractor
      />
      <View style={styles.paginationContainer}>
        {videos.map((_, index) => renderPaginationDot(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoContainer: {
    width: windowWidth,
    aspectRatio: 16 / 9, // Example aspect ratio (adjust as per your video dimensions)
    borderRadius: 10,
    overflow: 'hidden',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playPauseButton: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  muteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(VideoCarousel);
