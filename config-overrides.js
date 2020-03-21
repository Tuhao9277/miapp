const path = require('path')
const { injectBabelPlugin, getLoader } = require('react-app-rewired');
const rewirePostcss = require('react-app-rewire-postcss');
const pxtorem = require('postcss-pxtorem');
const srcRoot = path.resolve(__dirname, 'src')
const autoprefixer = require('autoprefixer');
const theme = require('./package.json').theme;
const fileLoaderMatcher = function (rule) {
    // eslint-disable-next-line 
    return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
}
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', {
        libraryName: 'antd-mobile',
        // style: 'css',
        style: true, // use less for customized theme
    }], config);
    config.resolve.alias = {
        'assets': path.resolve(__dirname, './src/assets'),
        'pages': path.resolve(__dirname, './src/pages'),
        'components': path.resolve(__dirname, './src/components'),
        'utils': path.resolve(__dirname, './src/utils'),
        'home':path.resolve(__dirname,'./src/pages/Home'),
        '@src': srcRoot
      }

    // sass
    config.module.rules[2].oneOf.unshift(
        {
            test: /\.scss$/,
            use: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                require.resolve('sass-loader'),
                { 
                    loader:  require.resolve('sass-resources-loader'),
                    options: {
                        resources: `${srcRoot}/assets/common.scss`
                    }
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            })
                        ],
                    },
                }
            ]
        }
    );
    //less
    config.module.rules[2].oneOf.unshift(
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
                {
                    loader: require.resolve('less-loader'),
                    options: {
                        // theme vars, also can use theme.js instead of this.
                        modifyVars: theme,
                        javascriptEnabled: true
                    },
                },
            ]
        }
    );

    config = rewirePostcss(config,{
        plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
            }),
            pxtorem({
                rootValue: 100,
                propWhiteList: [],
            })
        ],
    });

    // file-loader exclude
    let l = getLoader(config.module.rules, fileLoaderMatcher);
    l.exclude.push(/\.scss$/);
    l.exclude.push(/\.less$/);
    return config;
};