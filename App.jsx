import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setList([...list, {
        id: Math.random().toString(),
        value: task
      }]);
      setTask("");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((task) => (
          <View
            key={task.id}
          >
          <Text>{task.value}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justiyContent: "space-between",
    alignItems: "center",
    marginBottom: "20",
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
  },
  addButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
  }
});
