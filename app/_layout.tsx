import { Slot, SplashScreen, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/cache";
import { ActivityIndicator } from "react-native";

const RootLayout = () => {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  if (!fontsLoaded) return null;

  const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    // const pathName = usePathname();

    useEffect(() => {
      if (!isLoaded) return;

      const inAuthGroup = segments[0] === "(auth)";
      const inAuthenticatedGroup = segments[0] === "(authenticated)";

      if (isSignedIn && inAuthGroup) {
        router.replace("/(authenticated)/(tabs)/home");
      } else if (!isSignedIn && inAuthenticatedGroup) {
        router.replace("/(auth)/login");
      }
    }, [isSignedIn, segments, isLoaded]);

    if (!isLoaded) {
      return <ActivityIndicator size={"large"} />;
    }

    return <Slot />;
  };

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
