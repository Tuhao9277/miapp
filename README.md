使用AntDesign-mobile UI库，可以根据官网使用需要的组件

目录结构

- src
assets
    存放的图片文件夹
    一个common.scss通用scss文件。有一些可以预置的函数，如居中，默认内边距，清除浮动，添加省略号
pages
    存放页面，暂时新建了这几个，以后再加
static
    存放rem布局和重置样式的css
store
    最外层的redux，各自页面新建的reducer要在此目录下的reducer里注册

组件文件夹命名均以大写字母开头！