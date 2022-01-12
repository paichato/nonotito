module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      // "module:react-native-dotenv",
      // "react-native-dotenv",
    ],
    plugins: [
      // "module:react-native-dotenv",
      "inline-dotenv",
      // {
      //   moduleName: "react-native-dotenv",
      // },
    ],
  };
};
