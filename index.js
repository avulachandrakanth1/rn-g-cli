#!/usr/bin/env node

const { program } = require("commander");
const { createComponent } = require("./generators/createComponent");

program
  .command("g <type> <name>")
  .description("Generate a component or screen with full structure")
  .action((type, name) => {
    createComponent(type, name);
  });

program.parse(process.argv);

// #!/usr/bin/env node

// const fs = require("fs");
// const path = require("path");
// const { program } = require("commander");

// program
//   .command("g <type> <name>")
//   .description("Generate a component or screen with full structure")
//   .action((type, name) => {
//     const validTypes = ["component", "screen"];
//     if (!validTypes.includes(type)) {
//       console.error(`❌ Invalid type "${type}". Use "component" or "screen".`);
//       return;
//     }

//     // Split path: e.g. "ui/shared/Button"
//     const parsedPath = name.split(/[\/\\]/);
//     const componentName = parsedPath[parsedPath.length - 1];
//     const relativePath = parsedPath.slice(0, -1).join("/");

//     // Base path under src/
//     const baseDir = type === "component" ? "src/components" : "src/screens";

//     const targetDir = path.join(
//       process.cwd(),
//       "src",
//       relativePath ? relativePath : type === "component" ? "components" : "screens",
//       componentName
//     );

//     if (fs.existsSync(targetDir)) {
//       console.error(`❌ ${type} "${name}" already exists at ${targetDir}`);
//       return;
//     }

//     fs.mkdirSync(targetDir, { recursive: true });

//     // === index.tsx ===
//     const componentCode = `import React from 'react';
// import { View, Text } from 'react-native';
// import { styles } from './styles';
// import { ${componentName}Props } from './types';

// const ${componentName} = (props: ${componentName}Props) => {
//   return (
//     <View style={styles.container}>
//       <Text>${componentName} Component</Text>
//     </View>
//   );
// };

// export default ${componentName};
// `;

//     // === styles.ts ===
//     const stylesCode = `import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// `;

//     // === types.d.ts ===
//     const typesCode = `export interface ${componentName}Props {
//   // Define your props here
// }
// `;

//     fs.writeFileSync(path.join(targetDir, "index.tsx"), componentCode);
//     fs.writeFileSync(path.join(targetDir, "styles.ts"), stylesCode);
//     fs.writeFileSync(path.join(targetDir, "types.d.ts"), typesCode);

//     console.log(`✅ ${type} "${componentName}" created at ${targetDir}`);
//   });

// program.parse(process.argv);
