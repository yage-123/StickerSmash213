import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>トップページ</Text>
      <Link href="/calculator" asChild>
        <Button title="電卓を開く" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
