import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import SignUpScreen from "./SignUP";
const App = () => {
  const [showSignup, setShowSignup] = useState(false); // State to control showing sign-up screen

  // Function to simulate API GET request
  const handleGetAPI = async () => {
    try {
      // Simulate API call (replace with your API endpoint)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      Alert.alert("API Response", JSON.stringify(data)); // Show API data in an alert
    } catch (error) {
      Alert.alert("Error", "Failed to fetch data");
    }
  };

  // Function to show sign-up screen
  const handleSignup = () => {
    setShowSignup(true);
  };

  return (
    <View style={styles.container}>
      {!showSignup ? (
        <View>
          <Button title="Signup" onPress={handleSignup} color="#6200EE" />
          <View style={{ marginTop: 20 }}>
            <Button title="Get Data" onPress={handleGetAPI} color="#03DAC6" />
          </View>
        </View>
      ) : (
        <View style={styles.signupScreen}>
            <SignUpScreen/>
          <Button title="Go Back" onPress={() => setShowSignup(false)} color="#FF0266" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    width: '100%',

  },
//   signupScreen: {
//     alignItems: "center",
//   },
  signupText: {
    width: '100%',
    length:"100%",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#6200EE",
  },
  
});

export default App;
