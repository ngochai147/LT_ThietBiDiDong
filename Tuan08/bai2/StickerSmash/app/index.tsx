import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Started from "./component/started";
import TodoList from "./component/todoList";
import AddJob from "./component/addToDo";
export default function Index() {
  return (
    <Started></Started>
  );
}
