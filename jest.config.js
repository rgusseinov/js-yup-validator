export default {
  testEnvironment: "node", // Use Node environment for testing
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel for transforming ES modules
  },
};