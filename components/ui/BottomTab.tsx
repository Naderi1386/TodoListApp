import { Colors } from "@/constant/Colors";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "@/app/_layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type NavigationProp = NativeStackNavigationProp<StackParamList>;
type RouteKey = "AddTasks" | "Home" | "Tasks";

interface Route {
  key: RouteKey;
  title: string;
  icon: string;
}

const BottomTab = () => {
  const navigation = useNavigation<NavigationProp>();
  const [index, setIndex] = useState(0);

  const [routes] = useState<Route[]>([
    { key: "Home", title: "Home", icon: "home" },
    { key: "Tasks", title: "Tasks", icon: "clipboard-list" },
    { key: "AddTasks", title: "Add Tasks", icon: "plus" },
  ]);

  const onIndexChange = (index: number) => {
    setIndex(index);
    const routeKey = routes.at(index)?.key;
    if (routeKey) {
      navigation.navigate(routeKey);
    }
  };

  const renderScene = () => null;

  return (
    <BottomNavigation
      
      barStyle={Styles.bottomTab}
      style={{ flex: 0.1 }}
      inactiveColor={Colors.grey}
      activeColor={Colors.white}
      navigationState={{ index, routes }}
      onIndexChange={onIndexChange}
      renderScene={renderScene}
      renderIcon={({ route, color }) => {
        switch (route.key) {
          case "Home":
            return (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            );
          case "Tasks":
            return (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={30}
              />
            );
          case "AddTasks":
            return (
              <MaterialCommunityIcons name="plus" color={color} size={30} />
            );
          default:
            return null;
        }
      }}
    />
  );
};

export default BottomTab;

const Styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: Colors.blueDark,
  },
});
