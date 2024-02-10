const config = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default config;
