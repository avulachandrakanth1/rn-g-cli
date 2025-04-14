const fs = require("fs");
const path = require("path");
const { componentIndexTemplate } = require("./templates/indexTemplate");
const { componentStylesTemplate } = require("./templates/stylesTemplate");
const { componentTypesTemplate } = require("./templates/typesTemplate");

const createComponent = (type, name) => {
  const validTypes = ["component", "screen"];
  if (!validTypes.includes(type)) {
    console.error(`❌ Invalid type "${type}". Use "component" or "screen".`);
    return;
  }

  // Split path: e.g. "ui/shared/Button"
  const parsedPath = name.split(/[\/\\]/);
  const componentName = parsedPath[parsedPath.length - 1];
  const relativePath = parsedPath.slice(0, -1).join("/");

  // Base path under src/
  const baseDir = type === "component" ? "src/components" : "src/screens";

  const targetDir = path.join(
    process.cwd(),
    "src",
    relativePath ? relativePath : type === "component" ? "components" : "screens",
    componentName
  );

  if (fs.existsSync(targetDir)) {
    console.error(`❌ ${type} "${name}" already exists at ${targetDir}`);
    return;
  }

  fs.mkdirSync(targetDir, { recursive: true });

  // === Generate Files ===
  const indexFileContent = componentIndexTemplate(componentName);
  const stylesFileContent = componentStylesTemplate();
  const typesFileContent = componentTypesTemplate(componentName);

  fs.writeFileSync(path.join(targetDir, "index.tsx"), indexFileContent);
  fs.writeFileSync(path.join(targetDir, "styles.ts"), stylesFileContent);
  fs.writeFileSync(path.join(targetDir, "types.d.ts"), typesFileContent);

  console.log(`✅ ${type} "${componentName}" created at ${path.relative(process.cwd(), targetDir)}`);
  console.log("📄 Files created:");
  console.log("   • index.tsx");
  console.log("   • styles.ts");
  console.log("   • types.d.ts");
};

module.exports = { createComponent };
