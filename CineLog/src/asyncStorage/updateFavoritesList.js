import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateFavoritesList = async (key, ...value) => {
  try {
    // Check the number of arguments explicitly using arguments.length
    const numArgs = value.length+1;

    
    if (numArgs === 0) {
      throw new Error('There are no arguments in the function!');
    } else if (numArgs === 1) {
      if(key=="clearStorage"){
        AsyncStorage.removeItem("favorites-movies")
      }
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } else if (numArgs === 2) {
      // Retrieve the existing data
      const prevDataJson = await AsyncStorage.getItem(key);
      let prevData = prevDataJson ? JSON.parse(prevDataJson) : [];

      // Assuming prevData is an array. If its not, this will need adjustment.
      if (!Array.isArray(prevData)) {
        throw new Error('The data retrieved is not an array.');
      }

      // Add the new value to the end of the array
      prevData.push(...value);

      // Save the updated array back to AsyncStorage
      const jsonValue = JSON.stringify(prevData);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      throw new Error('There are too many arguments in the function!');
    }
  } catch (e) {
    console.error(e);
  }
};
