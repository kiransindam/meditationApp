import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  // Get the item data passed from the Home Screen
  const { session } = route.params || {
    id: '1',
    title: 'Morning Calm',
    duration: '10 min',
    category: 'Focus',
    emoji: '',
    description: 'Start your day with a clear mind. This 10-minute guided session helps you set intentions and focus on the present moment, reducing morning anxiety and boosting productivity.'
  };

  // State to track if the item is favorited (Prepares for Local Storage Task)
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, you would save this to AsyncStorage here
    Alert.alert(isFavorite ? 'Removed from Favorites' : 'Added to Favorites', 
                `${session.title} has been saved.`);
  };

  return (
    <View style={styles.container}>
      {/* Header with Navigation Icon (Task 14 Requirement) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Session Details</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Hero Image / Emoji Area */}
        <View style={styles.heroContainer}>
          <Text style={styles.heroEmoji}>{session.emoji}</Text>
        </View>

        {/* Item Information (Task 15 Requirement) */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{session.title}</Text>
          
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{session.duration}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{session.category}</Text>
            </View>
          </View>

          <Text style={styles.sectionHeader}>About this session</Text>
          <Text style={styles.description}>
            {session.description || 'A guided meditation session designed to help you relax, focus, and find inner peace. Perfect for beginners and experienced practitioners alike.'}
          </Text>

          <Text style={styles.sectionHeader}>Benefits</Text>
          <Text style={styles.description}>
            • Reduces stress and anxiety{'\n'}
            • Improves focus and concentration{'\n'}
            • Promotes better sleep quality{'\n'}
            • Enhances emotional well-being
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Action Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={() => Alert.alert('Playing', `Starting ${session.title}...`)}>
          <Text style={styles.startButtonText}>Start Meditation</Text>
        </TouchableOpacity>
      </View>
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
  backButton: { 
    padding: 5 
  },
  backIcon: { 
    fontSize: 24, 
    color: '#333', 
    fontWeight: 'bold' 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333' 
  },
  favoriteButton: { 
    padding: 5 
  },
  favoriteIcon: { 
    fontSize: 24 
  },
  content: { 
    flex: 1 
  },
  heroContainer: {
    backgroundColor: '#e3f2fd',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroEmoji: { 
    fontSize: 80 
  },
  infoContainer: { 
    padding: 20 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 15 
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  tagText: { 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: '600' 
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  description: { 
    fontSize: 16, 
    color: '#555', 
    lineHeight: 24 
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
