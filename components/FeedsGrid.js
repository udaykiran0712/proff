import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FeedsGrid = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('FeedDetail', { imageurl: item.image, description: item.description })}
    style={styles.container}
  >
    <Image source={{ uri: item.image }} style={styles.feedImage} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  feedImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
});
export default FeedsGrid;
