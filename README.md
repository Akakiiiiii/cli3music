# **Vue云音乐项目介绍**

预览地址：http://120.77.242.209/music/

## 前言
随着对vue的不断学习，在学习慕课网上黄轶老师的饿了么项目与音乐项目后，寻思着自己也捣鼓一个vue的项目，可以苦于后台数据的获取迟迟没有动手，偶尔一天看到github的优质开源项目[NeteaseCloudMusicAp](https://github.com/Binaryify/NeteaseCloudMusicApi)，该项目使得网易云后台的api得以使用，于是我就开始了项目的搭建之路。
对你学习Vue有帮助的话，欢迎点个**star**与**issue**
## 项目依赖
前端：Vue全家桶+Wave+ESLint+Axios+Less+Vant+Vue-lazyload
后端：[NeteaseCloudMusicAp](https://github.com/Binaryify/NeteaseCloudMusicApi)

## 项目运行
傻瓜式地启动方式
``` Gitbush
git clone git@github.com:Akakiiiiii/cli3music.git
npm install
npm run serve
```
## 功能概览
网易云音乐app基本上的功能与细节和ui都实现了，媲美原生app的体验与流畅

## 图片预览
1.歌单界面滚动时上边的标题也会随着滚动变化，每个歌单的top的图片都不一样

![enter description here](https://s2.ax1x.com/2020/01/02/lt6j0O.gif)

2.每日推荐界面，有着与歌单页面一样的滚动动画，且未登陆时不会加载


![enter description here](https://s2.ax1x.com/2020/01/02/lt6v7D.gif)

3.首页下拉刷新，会重新推荐歌单


![enter description here](https://s2.ax1x.com/2020/01/02/lt6XnK.gif)

4.听歌界面，唱片随着播放状态旋转，歌词组件会跟随正在唱的歌词

![enter description here](https://s2.ax1x.com/2020/01/02/lt6LX6.gif)

5.如果歌名过长，还会有平移的效果

![enter description here](https://s2.ax1x.com/2020/01/02/lt6q6x.gif)

6.歌曲切换

![enter description here](https://s2.ax1x.com/2020/01/02/lt6Ik4.gif)

7.一些按键有波纹的效果

![enter description here](https://s2.ax1x.com/2020/01/02/lt6fmT.gif)

8.搜索界面

![enter description here](https://s2.ax1x.com/2019/12/25/liwUvq.gif)

9.视频界面

![enter description here](https://s2.ax1x.com/2020/01/02/lt6Th9.gif)

**更多功能等你发现...**  
项目参考了https://github.com/powerdong/Music-player ，站在前辈脚步下进行开发并且新增了很多功能与对项目的进行了很多优化
