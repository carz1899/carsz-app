import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OtpLoginPage = () => {
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Login</Text>
      <Text style={styles.description}>Please enter the OTP sent to your mobile number.</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          placeholder="-"
          value={otp[0]}
          onChangeText={(text) => setOtp(`${text}${otp.substring(1, 6)}`)}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholder="-"
          value={otp[1]}
          onChangeText={(text) => setOtp(`${otp.substring(0, 1)}${text}${otp.substring(2, 6)}`)}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholder="-"
          value={otp[2]}
          onChangeText={(text) => setOtp(`${otp.substring(0, 2)}${text}${otp.substring(3, 6)}`)}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholder="-"
          value={otp[3]}
          onChangeText={(text) => setOtp(`${otp.substring(0, 3)}${text}${otp.substring(4, 6)}`)}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholder="-"
          value={otp[4]}
          onChangeText={(text) => setOtp(`${otp.substring(0, 4)}${text}`)}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: '16%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default OtpLoginPage;
