import { Colors } from "@/constant/Colors";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackParamList } from "@/app/_layout";

type NavigationProp = NativeStackNavigationProp<StackParamList>;
type RouteKey = "AddTasks" | "Home" | "Tasks";

const BottomTab = () => {
  const navigation = useNavigation<NavigationProp>();
  const [index, setIndex] = useState(0);
  const [routes] = useState<{ key: RouteKey; title: string }[]>([
    { key: "Home", title: "Home" },
    { key: "Tasks", title: "Tasks" },
    {
      key: "AddTasks",
      title: "Add Tasks",
    },
  ]);

  const onIndexChange = (index: number) => {
    setIndex(index);
    const routeKey = routes.at(index)?.key;
    navigation.navigate(routeKey as RouteKey);
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
    />
  );
};

export default BottomTab;

const Styles = StyleSheet.create({
  bottomTab: {
    color: "white",
    backgroundColor: Colors.blueDark,
  },
});
