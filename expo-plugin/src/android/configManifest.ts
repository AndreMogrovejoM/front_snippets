import { AndroidConfig, ConfigPlugin } from "@expo/config-plugins";
import { withAndroidManifest } from "@expo/config-plugins";
import { ExpoConfig } from "@expo/config-types";

export const withConfigManifest: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    config.modResults = setManifest(config, config.modResults);
    return config;
  });
};

export const setManifest = (
  config: Pick<ExpoConfig, "android">,
  androidManifest: AndroidConfig.Manifest.AndroidManifest
): AndroidConfig.Manifest.AndroidManifest => {
  return androidManifest;
};
