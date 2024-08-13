import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompanyScreen = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "You have Entered to your Company Screen Content";
  const typingSpeed = 60; 
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.typingText}>{displayText}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10,
    borderRadius: 10,
  },
  typingText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CompanyScreen;
