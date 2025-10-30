import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cafe world</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400' }}
          style={styles.image}
          resizeMode="cover"
        />
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/shops')}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 50,
    gap: 20,
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#00bcd4',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
