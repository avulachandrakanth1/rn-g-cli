const componentTypesTemplate = (componentName) => {
  return `export interface ${componentName}Props {
  // Define your props here
}
`;
};

module.exports = { componentTypesTemplate };
