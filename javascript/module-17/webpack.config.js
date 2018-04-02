var webpack = require('webpack');       // объявляем webpack//
var path = require('path');            //объявляем path//
var HTMLWebpackPlugin = require('html-webpack-plugin');   ////
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');      //это переменная с абсолютным маршрутом к папке src //

var DIST_DIR = path.resolve(__dirname, 'dist');   //это переменная с абсолютным маршрутом к папке dist //

var isProduction = (process.env.NODE_ENV === 'production');

module.exports = {                 //общий объект настроек//
    entry: './src/index.js',       //точка входа//
    output: {                        //куда выгружать//
        path: DIST_DIR,           //поле адреса//
        filename: 'bundle.js'     //Файл  выхода//
    },
    module: {                    //подключаем настройки разных типов файлов//
        rules: [
            // js rules//
            {
                test: /\.js$/,          //расширение;строго файлы!!!//
                include: SRC_DIR,      //место для начала поиска файлов//
                use: [                 //все лоадеры //
                    {
                        loader: 'babel-loader',  //конвертер с es6-es-7 в es-5//
                        options: {
                            presets: [['env', {modules: false}]]
                        }
                    }
                ]
            },
            // css rules//
            {
                test: /\.scss$/,
                include: SRC_DIR,
                use: ExtractTextPlugin.extract({    //в index-html создает link на все стили за тебя))//
                    use: ['css-loader', 'sass-loader'],  //loader - читается и записывается справа на лево. //
                    fallback: 'style-loader'      //это ф-ция для перестраховки, на случаи несработки extractTextPlugin//
                })
            },
//             // images rules//
            {
                test: /\.(jpg|png)$/i,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'url-loader',   //loader-ы для img//
                        options: {
                            name: '[name].[ext]',  //название //
                            outputPath: 'img/',     //куда выгружать //
                            limit: 10000      //лимит по kb//
                        }
                    },
                    {
                        loader: 'img-loader'      //loader-ы для img//
                    }
                ]
            },
//             // html rules//
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({       //ф-ция конструктор создания htmlPlugin//
            title: 'Webpack is awesome',
            filename: 'index.html',            //фотмат файла//
            template: 'src/index.html',     //где искать//
            favicon: 'src/favicon.png',   //создание иконки//
            inject: true              //вставляй в новый файл//
        }),
        new CleanWebpackPlugin(['dist']),     //очищает папку dist//
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction,
        })
    ],
    devServer: {            //настройки сервера при создание webpack-a//
        port: 9000,       //порт подключения localhost//
        stats: 'errors-only',    //значит, что ошибки будет выбивать в консили//
        clientLogLevel: 'warning',
        compress: true
    }
};

if (isProduction) {      //если запускаеться скипт для продакшена, то скрипт менимизируется//
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}