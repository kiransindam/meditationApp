// ApiScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { fetchMeditationTips } from './ApiService';

const ApiScreen = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMeditationTips();
      setTips(data);
    } catch (err) {
      setError('Failed to load meditation tips. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderTip = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Mindfulness Tips</Text>
      <Text style={styles.subHeader}>Fetched live from External API</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={tips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTip}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={loadData} />
          }
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 20 },
  subHeader: { fontSize: 14, color: '#666', marginBottom: 20 },
  loader: { marginTop: 50 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20, fontSize: 16 },
  list: { paddingBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#007AFF', marginBottom: 8 },
  cardDescription: { fontSize: 15, color: '#444', lineHeight: 22 },
});

export default ApiScreen;
