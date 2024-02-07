// eslint-disable-next-line no-undef
const path = require('path')

// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// eslint-disable-next-line no-undef
const CopyWebpackPlugin = require('copy-webpack-plugin')
// eslint-disable-next-line no-undef
const { WebpackOpenBrowser } = require('webpack-open-browser')

// eslint-disable-next-line no-undef
module.exports = {
  // Входной файл
  entry: ['./src/js/index.js'],

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  // Source maps для удобства отладки
  devtool: 'source-map',

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        // eslint-disable-next-line no-undef
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          }
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img'
      }
    ]),
    new WebpackOpenBrowser({ url: 'http://localhost:8080', browser: 'chrome' })
  ]
}
