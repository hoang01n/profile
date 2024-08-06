// import {defineConfig} from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "~": path.resolve(__dirname, "src/"),
//     },
//   },
// });
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env", "@babel/preset-react"],
  //         },
  //       },
  //     },
  //     // Các loader khác...
  //   ],
  // },
});
