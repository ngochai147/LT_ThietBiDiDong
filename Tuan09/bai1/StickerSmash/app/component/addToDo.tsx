import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddJob() {
  const [job, setJob] = useState("");
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const db = useSQLiteContext(); 

  const handleAddJob = async () => {
    if (!job.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập nội dung công việc!");
      return;
    }

    const newJob = {
      id: Date.now().toString(),
      text: job.trim(),
      done: false,
    };

    try {
      await db.runAsync(
        "INSERT INTO todos (id, text, done) VALUES (?, ?, ?)",
        [newJob.id, newJob.text, newJob.done ? 1 : 0]
      );

      try {
        const response = await fetch("https://6830916a6205ab0d6c399ca4.mockapi.io/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newJob),
        });

        if (!response.ok) throw new Error("Lỗi khi gửi lên server");

        console.log("Đã đồng bộ công việc lên cloud!");
      } catch (err) {
        console.log("Không thể đồng bộ ngay (offline?):");
      }

      router.back();
    } catch (error) {
      console.error("Lỗi khi thêm công việc:", error);
      Alert.alert("Lỗi", "Không thể thêm công việc, vui lòng thử lại!");
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{width:'100%',flex:1,alignItems:'center'}}>
        <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Image source={require("../images/Rectangle.png")} style={styles.avatar} />
          <View>
            <Text style={styles.name}>Hi {name}</Text>
            <Text style={styles.subtitle}>Have a great day ahead</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require("../images/Icon Button 11.png")} />
        </TouchableOpacity>
      </View>

      <Text style={styles.pageTitle}>ADD YOUR JOB</Text>

      <View style={styles.inputBox}>
        <Image source={require("../images/Frame (2).png")} style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Input your job"
          value={job}
          onChangeText={setJob}
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity style={styles.finishBtn} onPress={handleAddJob}>
        <Text style={styles.finishText}>FINISH →</Text>
      </TouchableOpacity>

      <Image source={require("../images/Image 96.png")} style={styles.noteImg} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 12, backgroundColor: "#DACFF4" },
  name: { fontSize: 18, fontWeight: "700", textAlign: "center" },
  subtitle: { color: "#888", fontSize: 13, fontWeight: "600" },
  pageTitle: { fontSize: 24, fontWeight: "700", marginBottom: 20, marginTop: 20 },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  textInput: { flex: 1, fontSize: 15 },
  finishBtn: {
    backgroundColor: "#26C3D9",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  finishText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  noteImg: { width: 120, height: 120, opacity: 0.8, marginTop: 100 },
});
