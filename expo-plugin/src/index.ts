import { ConfigPlugin } from "@expo/config-plugins";
import { withPlugins, createRunOncePlugin } from "@expo/config-plugins";

import { withConfigManifest } from "./android";
import { withConfigInfoPlist } from "./ios";

const with{{ pascalCase name }}: ConfigPlugin = (config, props) => {
  return withPlugins(config, [
    // Android
    withConfigManifest,
    // iOS
    withConfigInfoPlist,
  ]);
};

// REPLACE: Replace library name for the package json name
const pak = require("library/package.json");
export default createRunOncePlugin(
  with{{ pascalCase name }},
  pak.name,
  pak.version
);
