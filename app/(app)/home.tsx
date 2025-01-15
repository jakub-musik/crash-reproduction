import { Button, View } from "react-native";
// UNCOMMENT TO BREAK
// import { handleLogout } from '../../services/capsule/handleLogout'

const HomeScreen = () => {
  const onLogout = async () => {
    console.log("logging out");
    // UNCOMMENT TO BREAK
    // await handleLogout()
  };

  return (
    <View>
      <View className="flex-row justify-between p-m">
        <Button title="logout" onPress={() => void onLogout()} />
      </View>
    </View>
  );
};

export default HomeScreen;
