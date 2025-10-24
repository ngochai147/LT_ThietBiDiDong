import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SQLiteProvider, type SQLiteDatabase } from 'expo-sqlite';
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function Layout() {
  return (
    <>
        <SafeAreaProvider>
              <SQLiteProvider
              databaseName="todos.db"
              onInit={migrateDbIfNeeded}
              useSuspense={true}>
                  <StatusBar style="dark" />
                  <Stack screenOptions={{ headerShown: false }} />
            </SQLiteProvider>
        </SafeAreaProvider>
    </>

  );
}
interface Todo {
  id: string;
  text: string;
  done: boolean;
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  const row = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  let currentDbVersion = row?.user_version ?? 0;

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS todos (
        id TEXT PRIMARY KEY NOT NULL,
        text TEXT NOT NULL,
        done INTEGER DEFAULT 0
      );
    `);

    await db.runAsync('INSERT INTO todos (id, text, done) VALUES (?, ?, ?)', '1', 'hello', 0);
    await db.runAsync('INSERT INTO todos (id, text, done) VALUES (?, ?, ?)', '2', 'world', 1);

    currentDbVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
