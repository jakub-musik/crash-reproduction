// import '../shim'
import "@usecapsule/react-native-wallet/dist/shim";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { getCapsule } from "../services/capsule/capsule";
import { Suspense, useEffect, useState } from "react";
import "react-native-reanimated";
import * as SystemUI from "expo-system-ui";

import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [capsuleLoaded, setCapsuleLoaded] = useState(false);

  useEffect(() => {
    const initializeCapsuleClient = async () => {
      try {
        const capsule = await getCapsule("root");
        await capsule.init();
        console.log("capsule done");
      } catch (error) {
        console.error("Failed to initialize capsule client:", error);
      }
      setCapsuleLoaded(true);
    };

    initializeCapsuleClient();
  }, []);

  useEffect(() => {
    if (capsuleLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [capsuleLoaded]);

  // prevents flashes of white when opening keyboard
  useEffect(() => {
    void SystemUI.setBackgroundColorAsync("white");
  }, []);

  return (
    <GestureHandlerRootView>
      <Suspense fallback={null}>
        <Stack>
          <Stack.Screen name="(public)/signup" />
        </Stack>
      </Suspense>
    </GestureHandlerRootView>
  );
}
