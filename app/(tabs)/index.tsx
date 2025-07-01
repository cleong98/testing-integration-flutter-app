import { useCounter } from "@/store/counter";
import { Button, NativeModules, StyleSheet, Text, View } from "react-native";

const { FlutterBridge } = NativeModules;
export default function HomeScreen() {
  const counter = useCounter((state) => state.counter);
  const increment = useCounter((state) => state.increaseCounter);

  return (
    <View style={[styles.container]}>
      <Text>Counter</Text>
      <Text>{counter}</Text>
      <Button title="+1" onPress={increment} />
      <Button
        title="test flutter ui"
        onPress={() => {
          FlutterBridge.openFlutter();
        }}
      />
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
