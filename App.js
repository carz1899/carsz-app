import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OtpLoginPage from './otp';
export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Hello Cars</Text>
      <OtpLoginPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
