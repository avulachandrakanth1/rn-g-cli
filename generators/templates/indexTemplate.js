const componentIndexTemplate = (componentName) => {
  return `import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ${componentName}Props } from './types';

const ${componentName} = (props: ${componentName}Props) => {
  return (
    <View style={styles.container}>
      <Text>${componentName} Component</Text>
    </View>
  );
};

export default ${componentName};
`;
};

module.exports = { componentIndexTemplate };
