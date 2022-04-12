import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from './VideoPlayer';

const VideoApp = () => {
  return (

      <VideoPlayer />
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'black',
    borderWidth:4,
    borderColor:'red'
  },
});

export default VideoApp