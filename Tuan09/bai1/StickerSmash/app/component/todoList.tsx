import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";
const db = SQLite.openDatabaseSync("todos.db");

export default function TodoList() {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [todos, setTodos] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

const createTable = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS todos (
      id TEXT PRIMARY KEY NOT NULL,
      text TEXT,
      done INTEGER
    );
  `);
};

const saveToSQLite = async (data: any[]) => {
  for (const item of data) {
    const id = item.id.replace(/'/g, "''"); 
    const text = item.text.replace(/'/g, "''");
    const done = item.done ? 1 : 0;

    const sql = `INSERT OR REPLACE INTO todos (id, text, done) VALUES ('${id}', '${text}', ${done});`;
    await db.execAsync(sql);
  }
};



const fetchTodos = async () => {
  try {
    const res = await fetch("https://6830916a6205ab0d6c399ca4.mockapi.io/products");
    const data = await res.json();
    setTodos(data);
    await saveToSQLite(data);
  } catch (err) {
    console.log("Không thể tải API → dùng dữ liệu SQLite");
  }
};

const toggleDone = async (id: string, done: boolean) => {
  const newDone = !done;
  try {
    const doneValue = newDone ? 1 : 0;
    await db.execAsync(`UPDATE todos SET done = ${doneValue} WHERE id = '${id}';`);
    await fetch(`https://6830916a6205ab0d6c399ca4.mockapi.io/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: newDone }),
    });
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: newDone } : t)));
  } catch (err) {
    Alert.alert("Lỗi", "Không thể đồng bộ với server!");
    console.error(err);
  }
};



  useEffect(() => {
    createTable();
    fetchTodos();
  }, []);

  const filteredTodos = todos.filter(todo =>
    todo.text?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{width:'100%',flex:1,alignItems:'center'}}>
        <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require("../images/Icon Button 11.png")} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../images/Rectangle.png")} style={styles.avatar} />
            <View>
              <Text style={styles.name}>Hi {name}</Text>
              <Text style={styles.subtitle}>Have a great day ahead</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", position: "relative" }}>
        <Image style={{ position: "absolute", top: 8, left: 8 }} source={require("../images/Frame (1).png")} />
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchBox}
        />
      </View>
      <ScrollView style={{ width: "100%", marginTop: 40 }}>
        {(filteredTodos.length === 0 ? todos : filteredTodos).map(todo => (
          <View key={todo.id} style={styles.todoItem}>
            <TouchableOpacity
              style={styles.todoLeft}
              onPress={() => toggleDone(todo.id, todo.done)}
            >
              <Ionicons
                name={todo.done ? "checkbox" : "square-outline"}
                size={24}
                color={todo.done ? "#4CAF50" : "#B0B0B0"}
              />
              <Text
                style={[
                  styles.todoText,
                  todo.done && { textDecorationLine: "line-through", color: "#888" },
                ]}
              >
                {todo.text}
              </Text>
            </TouchableOpacity>
            <Feather name="edit-2" size={20} color="#f44336" />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push({ pathname: "/component/addToDo", params: { name } })}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  headerRow: { width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  headerLeft: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 12, backgroundColor: "#DACFF4" },
  name: { fontSize: 18, textAlign: "center", fontWeight: "600" },
  subtitle: { color: "#888", fontWeight: "700", fontSize: 13 },
  searchBox: { width: "100%", borderWidth: 1, borderColor: "#ddd", borderRadius: 4, paddingVertical: 10, paddingHorizontal: 35, marginBottom: 16 },
  todoItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 20, marginTop: 4, paddingVertical: 8, paddingHorizontal: 12, marginBottom: 10, backgroundColor: "#D3D5D8" },
  todoLeft: { flexDirection: "row", alignItems: "center" },
  todoText: { marginLeft: 8, fontSize: 15, color: "#333", fontWeight: "600" },
  addButton: { backgroundColor: "#26C3D9", width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center", elevation: 5 },
});
