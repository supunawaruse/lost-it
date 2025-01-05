import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import CustomText from "@/components/customText";
import CustomInput from "@/components/customInput";
import CustomButton from "@/components/customButton";
import CustomDivider from "@/components/customDivider";
import CircleImage from "@/components/customCircleImage";
import { useOAuth } from "@clerk/clerk-expo";
import { showErrorAlert } from "@/utils/helpers";

const Login = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      showErrorAlert(err.errors[0].longMessage, "Authentication");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#EAF2FF" />
        <View style={styles.scrollViewContainer}>
          <View style={styles.topContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>
          <View style={styles.bottomContainer}>
            <CustomText
              color="textPrimary"
              size={7}
              weight={4}
              style={{ marginBottom: 10 }}
            >
              Welcome!
            </CustomText>
            <CustomText
              color="subHint"
              size={3}
              weight={3}
              style={{ marginBottom: 30 }}
            >
              Log in to access your Lost It account and start tracking your
              items
            </CustomText>
            <View style={{ gap: 20 }}>
              <CustomInput
                placeholder="Email Address"
                onChangeText={(text) => setEmailAddress(text)}
              />
              <CustomInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <Link href="/(auth)/reset" style={{ marginVertical: 20 }}>
              <CustomText
                color="primary"
                size={2}
                weight={4}
                style={{ textAlign: "right" }}
              >
                Forgot password?
              </CustomText>
            </Link>
            <CustomButton type="fill" title="Login" onPress={onSignInPress} />

            <View>
              <CustomText
                size={2}
                weight={2}
                color="textPrimary"
                style={{ textAlign: "center", marginTop: 10 }}
              >
                Not a member?{" "}
                <Link href="/(auth)/register">
                  <CustomText size={2} weight={4} color="primary">
                    Register now
                  </CustomText>
                </Link>
              </CustomText>
            </View>

            <CustomDivider verticalMargin={30} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <CustomText
                size={2}
                weight={2}
                color="textPrimary"
                style={{ textAlign: "center" }}
              >
                Or continue with
              </CustomText>
              <CircleImage
                imageSource={icons.google}
                diameter={25}
                padding={10}
                backgroundColor="#E8E9F1"
                isButton
                onPress={handleGoogleLogin}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#EAF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  bottomContainer: {
    flex: 2,
    padding: 25,
    justifyContent: "center",
  },
});

export default Login;
