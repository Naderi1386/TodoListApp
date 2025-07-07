import CustomButton from "@/components/ui/CustomButton";
import { StyleSheet, Text, View } from "react-native";

const EmptyTasks = ({ handleNavigate }: { handleNavigate: () => void }) => {
  return (
    <View>
      <Text style={Styles.title}>There is nothing to do ):</Text>
      <CustomButton onPress={handleNavigate}>Add Something</CustomButton>
    </View>
  );
};

export default EmptyTasks;

const Styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
    fontStyle: "italic",
    marginVertical: 14,
  },
});
