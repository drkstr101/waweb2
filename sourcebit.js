const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    /**
     * The `sourcebit-source-filesystem` plugin reads content files from the provided `options.sources`,
     * and generates array of objects that are passed to subsequent plugins.
     */
    {
      module: require('sourcebit-source-filesystem'),
      options: {
        watch: isDev,
        sources: [
          { name: 'pages', path: path.join(__dirname, 'content/pages') },
          { name: 'data', path: path.join(__dirname, 'content/data') }
        ]
      }
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        commonProps: (objects) => {
          const config = objects.find((it) => it.__metadata.id === 'content/data/config.json');
          // confug.env = setEnvironmentVariables();
          return { config };
        }
      }
    }
  ]
};
