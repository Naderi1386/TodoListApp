import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import Tasks from "@/screens/Tasks";
import AddTasks from "@/screens/AddTasks";

export type StackParamList = {
  AddTasks: undefined;
  Home: undefined;
  Tasks: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="AddTasks" component={AddTasks} />
    </Stack.Navigator>
  );
}
