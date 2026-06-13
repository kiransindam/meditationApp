import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  // State for toggle switches
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Handle Logout functionality
  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of the Meditation App?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", onPress: () => navigation.replace('Login') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Settings</Text>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Profile', 'Navigate to Edit Profile')}>
        <Text style={styles.menuText}>Edit Profile</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Privacy', 'Navigate to Privacy Settings')}>
        <Text style={styles.menuText}>Privacy & Security</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Daily Meditation Reminders</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>

      {/* Support Section */}
      <Text style={styles.sectionTitle}>Support</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Help', 'Navigate to Help Center')}>
        <Text style={styles.menuText}>Help & Support</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('About', 'Meditation App v1.0')}>
        <Text style={styles.menuText}>About</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginTop: 15,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 22,
    color: '#ccc',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
