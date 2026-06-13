import AsyncStorage from '@react-native-async-storage/async-storage';

// Keys for local storage
const FAVORITES_KEY = '@meditation_favorites';
const SETTINGS_KEY = '@meditation_settings';

/**
 * Generic function to save data to local storage
 * @param {string} key - The storage key
 * @param {any} value - The data to save (will be stringified)
 */
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Successfully saved data to ${key}`);
  } catch (e) {
    console.error('Error saving data to local storage:', e);
  }
};

/**
 * Generic function to retrieve data from local storage
 * @param {string} key - The storage key
 * @returns {any} - The parsed data, or null if not found
 */
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data from local storage:', e);
  }
};

/**
 * App-specific function: Toggle a meditation session in favorites
 * @param {object} session - The session object to add/remove
 * @returns {array} - The updated list of favorites
 */
export const toggleFavoriteSession = async (session) => {
  try {
    // Get current favorites
    const currentFavorites = await getData(FAVORITES_KEY) || [];
    
    // Check if session is already favorited
    const isFavorite = currentFavorites.some(fav => fav.id === session.id);

    let updatedFavorites;
    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = currentFavorites.filter(fav => fav.id !== session.id);
    } else {
      // Add to favorites
      updatedFavorites = [...currentFavorites, session];
    }

    // Save updated list back to local storage
    await saveData(FAVORITES_KEY, updatedFavorites);
    
    return updatedFavorites;
  } catch (e) {
    console.error('Error toggling favorite session:', e);
  }
};

/**
 * App-specific function: Get all favorite sessions
 * @returns {array} - List of favorite sessions
 */
export const getFavoriteSessions = async () => {
  return await getData(FAVORITES_KEY);
};

/**
 * App-specific function: Save user settings (e.g., dark mode, notifications)
 * @param {object} settings - The settings object
 */
export const saveUserSettings = async (settings) => {
  await saveData(SETTINGS_KEY, settings);
};

/**
 * App-specific function: Get user settings
 * @returns {object} - The settings object
 */
export const getUserSettings = async () => {
  return await getData(SETTINGS_KEY);
};
