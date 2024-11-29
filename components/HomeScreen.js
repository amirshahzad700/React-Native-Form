import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import SignUpScreen from "./SignUP";
import GetApiPage from "./GetApiPage";

const App = () => {
  const [showSignup, setShowSignup] = useState(false); // State to control showing sign-up screen
  const [showComponent, setShowComponent] = useState(false); // State to control showing GetApiPage

  // Function to show sign-up screen
  const handleSignup = () => {
    setShowSignup(true);
  };

  // Function to show GetApiPage
  const handleShowComponent = () => {
    setShowComponent(true);
  };

  // Function to go back from GetApiPage
  const handleGoBack = () => {
    setShowSignup(false);
    setShowComponent(false);
  };

  return (
    <View style={styles.container}>
      {!showSignup && !showComponent ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleShowComponent}>
            <Text style={styles.buttonText}>Get User</Text>
          </TouchableOpacity>
        </View>
      ) : showSignup ? (
        <View style={styles.screenContainer}>
          <SignUpScreen />
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.screenContainer}>
          <GetApiPage />
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#6200EE",
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },
  secondaryButton: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#03DAC6",
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  screenContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    marginTop: 20,
    width: "60%",
    paddingVertical: 12,
    backgroundColor: "#FF0266",
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default App;
