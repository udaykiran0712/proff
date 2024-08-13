import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';

const FeedDetail = ({ route }) => {
  const { imageurl, description } = route.params;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={{ uri: imageurl }} style={styles.feedImage} />
      {description && <Text style={styles.feedText}>{description}</Text>}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  feedImage: {
    width: '100%',
    height: 400,
  },
  feedText: {
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default FeedDetail;
