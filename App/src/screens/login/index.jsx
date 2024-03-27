import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import GoogleIcon from "../../assets/google-logo-48.png";
export default function Login() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // adicionar lógica de autenticação
    // Após o login ser bem sucedido, navegue para a tela Main
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
    navigation.navigate("Main");
  };

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassoword] = React.useState("");
  const handleRegister = () => {
    console.log("cadastro");
  };
  const handleRecoveryPassword = () => {
    console.log("recuperar senha");
  };

  const line = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#9DA1AE" }} />
        <View style={{ flex: 0, flexWrap: "nowrap" }}>
          <Text style={{ width: 50, textAlign: "center", color: "#9DA1AE" }}>
            Ou
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#9DA1AE" }} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Entrar</Text>
        <Text style={{ color: "#9DA1AE", marginBottom: 30 }}>
          Seja-bem vindo, tenha uma ótima experiência{" "}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassoword}
          placeholder="Password"
          value={password}
        />
        <View>
          <Text style={{ color: "#9DA1AE", fontSize: 12 }}>
            Sua senha deve ter no mínimo 6 caracteres
          </Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={handleRecoveryPassword}
        >
          <Text
            style={{
              color: "blue",
              textDecorationLine: "underline",
              fontSize: 12,
              textAlign: "right",
            }}
          >
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "#DD89FE",
            width: 250,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 15,
          }}
          // onPress={() => console.log("Entrar")}
          onPress={handleLoginPress}
        >
          <Text style={{ color: "#4F0076" }}>ENTRAR</Text>
        </TouchableOpacity>
        {line()}
        <TouchableOpacity activeOpacity={0.8} onPress={handleRegister}>
          {/* faça circulo em volta da imagem */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#9DA1AE",
              // justifyContent: "center",
              // alignItems: "center",
              alignSelf: "flex-start",
              margin: 15,
            }}
          >
            <Image
              source={GoogleIcon}
              style={{
                margin: 5,
              }}
            />
          </View>
        </TouchableOpacity>
        {/* <Button style={{ flex: 1 }} title="Entre com o Google" /> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // margin: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Não tem uma conta?
          </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text
              style={{
                color: "blue",

                textDecorationLine: "underline",
              }}
            >
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    height: "100%",
  },
  input: {
    // height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DD89FE",
    borderRadius: 10,
  },
});
