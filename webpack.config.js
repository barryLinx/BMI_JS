const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js'
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/img'),
  //   },
  // },
  plugins: [
    new MiniCssExtractPlugin(
        {
         filename:'[name].css'
       }
    ),
    new HtmlWebpackPlugin({
      title: 'BMI_js',
      template: './src/index.html',
      filename: 'main.html',
      //inject:'head',
      //scriptLoading:'defer',
      //chunks:['main']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        //use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // publicPath: 'src/image',
              outputPath: 'image'
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //     },
          //     // optipng.enabled: false will disable optipng
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.90],
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //   }
          // },
        ]
      }
    ]

  },


  devtool: "source-map",
  devServer: {
    compress: true,
    //contentBase: path.join(__dirname, 'dist'),
    port: 3033,
    stats: {
      hash: true
    }
  }
}