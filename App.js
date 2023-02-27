import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-web";
import { A } from "@expo/html-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <SobreScreen></SobreScreen>
      <HomeScreen></HomeScreen>
      <ContactScreen></ContactScreen>
      <StatusBar style="auto" />
    </View>
  );
}

function SobreScreen() {
  return (
    <View>
      <Text style={{fontSize: '18px', fontWeight: "bold", }}>Sobre Heloise</Text>
      <Text> </Text>
      <Image
        source={require("./assets/Helo.jpeg")}
        style={{ width: "300px", height: "300px", }}
      />
      <Text> </Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>
        Olá, essa é a Helo, a mulher mais linda desse mundo, a mais perfeita e
        divertida
      </Text>
      <Text> </Text>
      <Text> Sabe a barra?</Text>
      <Text> vc ta forçando ela.</Text>
      <Text>-Loló</Text>
      <Image
        source={{ uri: "url" }}
        style={{ height: "300px", width: "300px" }}
      />
    </View>
  );
}


function ContactScreen() {
  return (
    <View>
      <Text>Site para endeusar uma mulher</Text>
      <Text> </Text>
      <A
        style={{
          color: "salmon",
        }}
        href="https://www.instagram.com/pvd.straw.berry/"
      >
        Insta da Rainha
      </A>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
