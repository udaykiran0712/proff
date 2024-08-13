import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Personal from './Personal';
import Professional from './Professional';
import Company from './Comapany';
import TopTabs from '../components/TopTabs';

const Home = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Personal');
  const renderScreen = () => {
    switch (selectedTab) {
      case 'Personal':
        return <Personal navigation={navigation} />;
      case 'Professional':
        return <Professional />;
      case 'Company':
        return <Company/>;
      default:
        return <Personal navigation={navigation} />;
    }
  };
  return (
    <View style={styles.container}>
      <TopTabs selectedTab={selectedTab} onSelect={setSelectedTab} />
      {renderScreen()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default Home;
