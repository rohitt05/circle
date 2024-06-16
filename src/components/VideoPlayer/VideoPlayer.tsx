/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Pressable, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

interface IVideoPlayerProps {
  uri: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({uri}) => {
  const [paused, setPaused] = useState(true); // Initialize paused state to true
  const [muted, setMuted] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const onVideoLoad = (data: {
    naturalSize: {width: number; height: number};
  }) => {
    const {width, height} = data.naturalSize;
    setAspectRatio(width / height);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{uri}}
        style={[styles.video, {aspectRatio}]}
        paused={paused}
        muted={muted}
        resizeMode="cover"
        onLoad={onVideoLoad}
      />
      <Pressable style={styles.playPauseButton} onPress={togglePlayPause}>
        <Icon name={paused ? 'play' : 'pause'} size={50} color="white" />
      </Pressable>
      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Icon
          name={muted ? 'volume-mute' : 'volume-high'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  muteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default VideoPlayer;
