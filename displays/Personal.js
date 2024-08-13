import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ImageColors from 'react-native-image-colors';
import FeedsGrid from '../components/FeedsGrid';
import { feeds } from '../mockData'; 
import { ImageBackground } from 'react-native';

const Personal = ({ navigation }) => {
  const [colors, setColors] = useState({ background: '#fff', primary: '#000', secondary: '#000', detail: '#000' });
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    const fetchColors = async () => {
      const result = await ImageColors.getColors('https://th.bing.com/th/id/OIP.hE9axE08MJNbBZyiP7oRRQHaLG?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet', {
        fallback: '#000000',
      });
      setColors(result);
    };
    fetchColors();
  }, []);
  const handleFollowToggle = () => {
    setIsFollowing(prevState => !prevState);
  };
  const renderHeader = () => (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <ImageBackground style={{ backgroundColor: colors.background, width: '100%' }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.hE9axE08MJNbBZyiP7oRRQHaLG?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet' }}
            style={styles.profileImage}
          />
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png' }}
            style={styles.badgeImage}
          />
        </View>
        <Text style={{ color: colors.primary, fontSize: 20, fontWeight: 'bold' }}>Dr. Nivetha Thomas</Text>
        <Text style={{ color: colors.secondary }}>Cardiologist, Banglore, India</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.followButton,
              isFollowing ? styles.followingButton : styles.followButtonDefault,
            ]}
            onPress={handleFollowToggle}
          >
            <Text style={{ color: '#fff' }}>
              {isFollowing ? 'Following ✔' : 'Follow'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.followButton, styles.followButtonDefault]}
            onPress={() => {}}
          >
            <Text style={{ color: '#fff' }}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.primary }}>#HeartSurgery #Cardiology #Health</Text>
      </ImageBackground>
    </View>
  );
  return (
    <FlatList
      data={feeds}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <FeedsGrid item={item} navigation={navigation} />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      contentContainerStyle={{ backgroundColor: colors.background }}
    />
  );
};
const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  badgeImage: {
    position: 'absolute',
    bottom: 0,
    right: 255,
    width: 20,
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  followButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#228BE6',
    alignItems: 'center',
  },
  followButtonDefault: {
    backgroundColor: '#228BE6',
  },
  followingButton: {
    backgroundColor: '#1A73E8',
    borderColor: '#1A73E8',
  },
});

export default Personal;
