import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={[styles.container]}>
      <Text>Counter</Text>
      <Text>{counter}</Text>
      <Button title="+1" onPress={() => setCounter(counter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
