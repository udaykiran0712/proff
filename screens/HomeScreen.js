import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PersonalScreen from './PersonalScreen';
import ProfessionalScreen from './ProfessionalScreen';
import CompanyScreen from './CompanyScreen';
import TopTabs from '../components/TopTabs';

const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Personal');
  const renderScreen = () => {
    switch (selectedTab) {
      case 'Personal':
        return <PersonalScreen navigation={navigation} />;
      case 'Professional':
        return <ProfessionalScreen />;
      case 'Company':
        return <CompanyScreen/>;
      default:
        return <PersonalScreen navigation={navigation} />;
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

export default HomeScreen;
