module.exports = {
  "stories": [
  // "../src/**/*.stories.mdx",
  // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  "../src/Components/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};