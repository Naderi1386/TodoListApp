import { Colors } from "@/constant/Colors";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "./BottomTab";

const Header = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text onPress={() => navigation.navigate("Home")} style={Styles.title}>
          Todos List
        </Text>
        <Image
          style={Styles.logo}
          source={{
            uri: "https://e7.pngegg.com/pngimages/435/425/png-clipart-logo-circle-brand-font-circle-angle-text-thumbnail.png",
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 9999,
  },
});
