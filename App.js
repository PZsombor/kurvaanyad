import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [piece, setPiece] = useState();
  function calcValue() {
    alert(":) " + piece)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gyalog</Text>
      </View>
      
      <View style={styles.body}>
        <Text>Áldozatok</Text>
        <TextInput
          style={styles.input}
          onChangeText={piece => setPiece(piece)}/>
        <Button
          title='Értékelés'
          onPress={calcValue}
        />
        <Text>{}</Text>
        
      </View>
      
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

  header: {
    backgroundColor: 'cyan',
    height: 50,
    width: '100%',

  },

  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'bold'
  },

  body: {
    flex: 1,
    backgroundColor: 'skyblue',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 10,
    marginTop: 10,
    height: 40,
    fontSize: 25,
    borderRadius: 10,
    padding: '10px'
  },
});
