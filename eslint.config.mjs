import nextEslintConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**']
  },
  ...nextEslintConfig
];

export default config;
