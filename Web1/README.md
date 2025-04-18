# 教育门户网站项目

本项目是仿照新东方教育网站（https://www.xdf.cn/）风格设计的教育门户网站模板。

## 项目特点

- 响应式设计，适配桌面和移动设备
- 模块化结构，易于维护和扩展
- 现代化UI设计，符合用户体验
- 丰富的互动元素和动画效果

## 技术栈

- HTML5
- CSS3 (使用CSS变量，Flexbox布局)
- JavaScript (ES6+)
- Bootstrap 5
- Swiper.js (轮播图组件)

## 文件结构

```
edu-portal/
│
├── css/
│   ├── normalize.css     # 跨浏览器样式标准化
│   └── style.css         # 主样式文件
│
├── js/
│   └── main.js           # 主脚本文件
│
├── images/               # 图片资源
│
├── assets/
│   └── icons/            # 图标资源
│
├── index.html            # 主页
└── package.json          # 项目配置文件
```

## 页面内容

- 顶部导航栏
- 主轮播图展示区
- 资讯卡片区
- 热点资讯区
- 学习工具区
- 课程推荐区
- 友情链接
- 页脚信息

## 如何运行

1. 确保安装了Node.js环境
2. 安装依赖: `npm install`
3. 启动开发服务器: `npm start`
4. 在浏览器中访问: `http://localhost:8080`

## 设计风格

- 主色调：红色(#e74c3c)，蓝色(#3498db)
- 辅助色：橙色(#f39c12)
- 字体：微软雅黑，冬青黑体，文泉驿微米黑
- 卡片式设计，突出内容模块
- 统一的按钮和链接样式
- 简洁大方的布局，重点内容突出显示
- 响应式设计，确保在各种设备上的良好体验

## 后续开发计划

- 增加更多内页模板（课程详情、资讯内容等）
- 实现用户认证功能
- 添加在线评论系统
- 集成更多互动功能
- 优化移动端体验

## 注意事项

- 本项目仅为前端界面示例，实际应用需要对接后端服务
- 图片和图标资源需要自行添加到相应目录 