import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Mock data for meditation sessions
  const meditationSessions = [
    { id: '1', title: 'Morning Calm', duration: '10 min', category: 'Focus', emoji: '' },
    { id: '2', title: 'Deep Sleep', duration: '20 min', category: 'Sleep', emoji: '🌙' },
    { id: '3', title: 'Stress Relief', duration: '15 min', category: 'Anxiety', emoji: '' },
    { id: '4', title: 'Loving Kindness', duration: '12 min', category: 'Compassion', emoji: '❤️' },
  ];

  return (
    <View style={styles.container}>
      {/* App Header with Logo (Crucial for Task 12) */}
      <View style={styles.header}>
        <Image
          // Replace this URI with your actual local logo asset if needed
          // Example: source={require('./assets/logo.png')}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2904/2904967.png' }} 
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Meditation App</Text>
        
        {/* Settings Icon (Helpful for Task 22: Menu Icon Evidence) */}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Home Screen Layout */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Featured Sessions</Text>
        
        {meditationSessions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { session: item })}
          >
            <View style={styles.cardImageContainer}>
              <Text style={styles.cardEmoji}>{item.emoji}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDuration}>{item.duration} • {item.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f7fa' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: { 
    width: 40, 
    height: 40, 
    resizeMode: 'contain' 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333', 
    flex: 1, 
    marginLeft: 10 
  },
  settingsIcon: { 
    fontSize: 24 
  },
  content: { 
    padding: 20 
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 15 
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImageContainer: {
    width: 60, 
    height: 60, 
    backgroundColor: '#e3f2fd', 
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15,
  },
  cardEmoji: { 
    fontSize: 30 
  },
  cardContent: { 
    flex: 1, 
    justifyContent: 'center' 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333', 
    marginBottom: 5 
  },
  cardDuration: { 
    fontSize: 14, 
    color: '#666' 
  },
});

export default HomeScreen;
