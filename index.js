// let RNInstalledGetApps = require("react-native").NativeModules
//   .RNInstalledGetApps;

import { NativeModules } from "react-native";

const { RNInstalledGetApps } = NativeModules;

module.exports = {
  getApps(): Promise<any> {
    return RNInstalledGetApps.getApps();
  },
  getNonSystemApps(): Promise<any> {
    return RNInstalledGetApps.getNonSystemApps();
  },
  getSystemApps(): Promise<any> {
    return RNInstalledGetApps.getSystemApps();
  }
};
