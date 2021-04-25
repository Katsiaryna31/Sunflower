const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/assets/js/index.js',
        main: './src/assets/js/main',
        burger: './src/assets/js/burger-button',
        feedbackSlider: './src/assets/js/feedback-slider',
        slider: './src/assets/js/slider',
        activities: './src/assets/js/activities',
        progressiveImage: './src/assets/js/progressive-image',
    },
    output: {
        filename: 'assets/js/[name].js',
        path: path.resolve(__dirname, './dist'),
        library: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-private-methods',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        }, {
            test: /\.html$/,
            include: path.resolve(__dirname, 'src/html/includes'),
            use: [
                {
                    loader: 'file-loader',
                    options: { minimize: false, name: '[name].[ext]' }
                }
            ],
            exclude: path.resolve(__dirname, 'src/index.html')
        }, {
            test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                name: '../fonts/[name].[ext]'
            }
        }, {
            test: /\.(png|jpe?g|svg|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '../images/[name].[ext]?[contenthash]',
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: 'src/assets/js/postcss.config.js' } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options: { sourceMap: true},
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: 'src/assets/js/postcss.config.js' } }
                }
            ],
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css"
        }),

        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            filename: './index.html',
            chunks: ['app' , 'main', 'feedbackSlider', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'sport.html',
            template: './src/sport.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'motorics.html',
            template: './src/motorics.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'languages.html',
            template: './src/languages.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'preschool.html',
            template: './src/preschool.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'creative.html',
            template: './src/creative.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'music.html',
            template: './src/music.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'cooking.html',
            template: './src/cooking.html',
            chunks: ['app' , 'burger', 'slider', 'activities', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: '404page.html',
            template: './src/404page.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'tenis.html',
            template: './src/tenis.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'preschool-education.html',
            template: './src/preschool-education.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'kindergarden.html',
            template: './src/kindergarden.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'camp.html',
            template: './src/camp.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),
        
        new HtmlWebPackPlugin({  
            filename: 'child-center.html',
            template: './src/child-center.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'main.html',
            template: './src/main.html',
            chunks: ['app' , 'main', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),
    ],

}