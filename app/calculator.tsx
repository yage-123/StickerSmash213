import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CalculatorForm(): React.ReactElement {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleCalculate = (): void => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  const handleClear = (): void => {
    setInput('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TextInput
          style={styles.inputText}
          placeholder="式を入力"
          value={input}
          onChangeText={setInput}
          keyboardType="default"
        />
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>計算</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  display: {
    padding: 20,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 30,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    width: '80%',
    textAlign: 'right',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 40,
    color: '#000',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#e0e0e0',
    width: 100,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});

