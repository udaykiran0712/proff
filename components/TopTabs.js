import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const TopTabs = ({ selectedTab, onSelect }) => {
  const tabs = ['Personal', 'Professional', 'Company'];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onSelect(tab)}
          style={[styles.tabButton, selectedTab === tab && styles.selectedTab]}
        >
          <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabButton: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  selectedTab: {
    backgroundColor: '#6200ee',
  },
  tabText: {
    color: '#000',
    fontSize: 16,
  },
  selectedTabText: {
    color: '#fff',
  },
});
export default TopTabs;
