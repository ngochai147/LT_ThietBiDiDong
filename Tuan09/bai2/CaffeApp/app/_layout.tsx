import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="shops" />
      <Stack.Screen name="drinks" />
      <Stack.Screen name="orders" />
    </Stack>
  );
}
