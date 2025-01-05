import { View, StyleSheet, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import images from "@/constants/images";
import CustomText from "@/components/customText";
import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";

const PwReset = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const { signIn, setActive } = useSignIn();

  const onRequestReset = async () => {
    try {
      await signIn!.create({
        strategy: "reset_password_email_code",
        identifier: emailAddress,
      });
      setSuccessfulCreation(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  const onReset = async () => {
    try {
      const result = await signIn!.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      });
      console.log(result);
      alert("Password reset successfully");
      await setActive!({ session: result.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

      {!successfulCreation && (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              gap: 15,
            }}
          >
            <Image
              source={images.resetPassword}
              resizeMode="contain"
              style={{ height: 250, width: 250 }}
            />
            <CustomText size={5} weight={4} color="textPrimary">
              Reset Password
            </CustomText>
            <CustomText
              size={3}
              weight={3}
              color="hint"
              style={{ textAlign: "center" }}
            >
              We'll send you a password reset code to your email address
            </CustomText>
            <CustomInput
              value={emailAddress}
              placeholder="Enter your email address"
              onChangeText={(email) => setEmailAddress(email)}
            />
            <CustomButton
              type="fill"
              title="Send Reset Email"
              onPress={onRequestReset}
              style={{ width: "100%" }}
            />
          </View>
        </>
      )}

      {successfulCreation && (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              gap: 15,
            }}
          >
            <Image
              source={images.resetPassword}
              resizeMode="contain"
              style={{ height: 250, width: 250 }}
            />
            <CustomText size={5} weight={4} color="textPrimary">
              Reset Password
            </CustomText>
            <CustomText
              size={3}
              weight={3}
              color="hint"
              style={{ textAlign: "center" }}
            >
              Enter the code sent to your email address and set a new password
            </CustomText>
            <CustomInput
              value={code}
              placeholder="Code..."
              onChangeText={setCode}
            />
            <CustomInput
              placeholder="New password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <CustomButton
              type="fill"
              title="Set new Password"
              onPress={onReset}
              style={{ width: "100%" }}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default PwReset;
