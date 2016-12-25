var webpack=require('webpack');
var path = require('path');
var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports={
    //插件项
    plugins:[commonsPlugin],
    //页面入口文件配置
    entry:{
        index:'./src/js/main.js'
    },
    //入口文件输出配置
    output:{
        path:'src/script/',
        filename:"main.js"
    },
    module:{
        //加载器配置
        loaders:[
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.js$/,loader:"jsx-loader?harmony"},
            {test:/\.scss$/,loader:"style!css!sass?sourchMap"},
            {test:/\.(png|jpg)$/,loader:"url-loader?limit=8192"},
            {test: /\.vue$/, loader: 'vue'},
        ]
    },
    resolve:{
        //其它解决方案配置,最后是 resolve 配置，配置查找模块的路径和扩展名和别名（方便书写）
        root:"F:/website/src",
        extensions:['', '.js', '.json', '.scss', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/images'),
            'components': path.resolve(__dirname, './src/page')
        }
    }
};