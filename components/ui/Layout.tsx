import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./Header";
import { Colors } from "@/constant/Colors";
import BottomTab from "./BottomTab";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <View style={Styles.main}>{children}</View>
      <BottomTab />
    </SafeAreaView>
  );
};

export default Layout;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 0.9,
    backgroundColor: Colors.blueLight,
    padding: 20,
  },
});
