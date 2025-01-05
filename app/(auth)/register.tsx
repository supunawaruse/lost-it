import * as React from "react";
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/components/customText";
import CustomInput from "@/components/customInput";
import CustomButton from "@/components/customButton";
import images from "@/constants/images";

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsButtonDisabled(
      !emailAddress.trim() ||
        !password.trim() ||
        !firstName.trim() ||
        !lastName.trim()
    );
  }, [emailAddress, password, firstName, lastName]);

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      showErrorAlert(err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const showErrorAlert = (errorMessage: string) => {
    const currentTime = new Date().toLocaleTimeString();
    Alert.alert("Authentication Error", `${errorMessage}`, [{ text: "OK" }]);
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
          gap: 15,
        }}
      >
        <Image
          source={images.verification}
          resizeMode="contain"
          style={{ height: 250, width: 250 }}
        />
        <CustomText size={5} weight={4} color="textPrimary">
          OTP Verification
        </CustomText>
        <CustomText
          size={3}
          weight={3}
          color="hint"
          style={{ textAlign: "center" }}
        >
          We'll send you a verification code to your email address
        </CustomText>
        <CustomInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <CustomButton
          type="fill"
          title="Verify Email"
          onPress={onVerifyPress}
          style={{ width: "80%" }}
        />
      </View>
    );
  }

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
              Create account
            </CustomText>
            <CustomText
              color="subHint"
              size={3}
              weight={3}
              style={{ marginBottom: 30 }}
            >
              Sign Up with us to access your Lost It account and start tracking
              your items
            </CustomText>
            <View style={{ gap: 20 }}>
              <CustomInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <CustomInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
              <CustomInput
                placeholder="Email Address"
                value={emailAddress}
                onChangeText={(text) => setEmailAddress(text)}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <CustomButton
              disabled={isButtonDisabled}
              type="fill"
              title="Sign Up"
              onPress={onSignUpPress}
              style={{ marginTop: 20 }}
            />

            <View>
              <CustomText
                size={2}
                weight={2}
                color="textPrimary"
                style={{ textAlign: "center", marginTop: 10 }}
              >
                Already have an account?{" "}
                <Link href="/(auth)/login">
                  <CustomText size={2} weight={4} color="primary">
                    Login
                  </CustomText>
                </Link>
              </CustomText>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

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