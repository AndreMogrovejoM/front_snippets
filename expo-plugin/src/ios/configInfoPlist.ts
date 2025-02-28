import { InfoPlist, ConfigPlugin } from "@expo/config-plugins";
import { ExportedConfigWithProps } from "@expo/config-plugins";
import { withInfoPlist } from "@expo/config-plugins";

export const withConfigInfoPlist: ConfigPlugin = (config) => {
  return withInfoPlist(config, (config) => {
    config = setBundleURLTypes(config);
    return config;
  });
};

export const setBundleURLTypes = (
  config: ExportedConfigWithProps<InfoPlist>
): ExportedConfigWithProps<InfoPlist> => {
  return config;
};
