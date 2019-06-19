const path = require('path')
// 坑,vue-loader@15.*之后必须带有VueLoaderPlugin 并单独配置css-loader。
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 出现一段js代码,把样式写进html中
                    'css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:1024,
                            name:'[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}