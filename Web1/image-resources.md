# 教育门户网站图片资源对应表

本文档用于记录网站中所有图片资源的使用位置、对应文字和链接，方便后续更新和管理。

## 轮播图区域

| 位置 | 说明文字 | 当前图片链接 | HTML位置 |
|------|---------|------------|---------|
| 主轮播图1 | 2022全球最佳留学城市排名发布！ | https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80 | hero-banner > swiper-slide:nth-child(1) |
| 主轮播图2 | 2023考研英语大纲变化解析 | https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80 | hero-banner > swiper-slide:nth-child(2) |

## 学习工具区图标

| 位置 | 说明文字 | 当前图片链接 | HTML位置 |
|------|---------|------------|---------|
| 工具图标1 | 2021全国高考试题答案解析 | https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/icons/book.svg | learning-tools > tool-card:nth-child(1) |
| 工具图标2 | 历年全国各省市中考试题及答案解析 | https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/icons/journal-check.svg | learning-tools > tool-card:nth-child(2) |
| 工具图标3 | 雅思写作指导 | https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/icons/pen.svg | learning-tools > tool-card:nth-child(3) |

## 课程推荐区图片

| 位置 | 说明文字 | 当前图片链接 | HTML位置 |
|------|---------|------------|---------|
| 课程图片1 | 四级强化课程 | https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80 | course-recommendations > course-card:nth-child(1) |
| 课程图片2 | 考研英语课程 | https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80 | course-recommendations > course-card:nth-child(2) |
| 课程图片3 | 零基础学英语 | https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80 | course-recommendations > course-card:nth-child(3) |
| 课程图片4 | 小语种课程报名攻略 | https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80 | course-recommendations > course-card:nth-child(4) |

## 图片更新指南

当需要更新网站图片时，可以参考以下步骤：

1. 在上表中找到需要更新的图片位置
2. 准备好新的图片资源（可以使用以下免费图片资源网站）：
   - [Unsplash](https://unsplash.com/) - 高质量免费图片
   - [Pexels](https://www.pexels.com/) - 免费图片和视频
   - [Pixabay](https://pixabay.com/) - 免费图片、插图和视频
   - [Bootstrap Icons](https://icons.getbootstrap.com/) - 免费图标资源

3. 替换index.html文件中对应位置的图片URL

### 图片尺寸参考

- 轮播图：推荐尺寸 1200×600 像素
- 课程卡片图片：推荐尺寸 600×400 像素
- 工具图标：推荐尺寸 64×64 像素

### 图片格式建议

- 网页图片优先使用 WebP 或 JPEG 格式以获得更好的压缩率
- 图标优先使用 SVG 格式以保证不同尺寸下的清晰度
- 照片类图片可使用 JPEG 格式，透明背景图片使用 PNG 格式

## 链接关系

| 页面区域 | 链接文字 | 链接位置 | 链接URL |
|---------|---------|---------|--------|
| 轮播图1 | 查看详情 | hero-banner > swiper-slide:nth-child(1) > btn-more | # |
| 轮播图2 | 查看详情 | hero-banner > swiper-slide:nth-child(2) > btn-more | # |
| 资讯卡片1 | 查看详情 | info-cards > info-card:nth-child(1) > card-link | # |
| 资讯卡片2 | 查看详情 | info-cards > info-card:nth-child(2) > card-link | # |
| 资讯卡片3 | 查看详情 | info-cards > info-card:nth-child(3) > card-link | # |
| 资讯卡片4 | 查看详情 | info-cards > info-card:nth-child(4) > card-link | # |
| 热点资讯 | 详细 | featured-news > main-news > btn-read-more | # |
| 学习工具1 | 查看详情 | learning-tools > tool-card:nth-child(1) > btn-tool | # |
| 学习工具2 | 查看详情 | learning-tools > tool-card:nth-child(2) > btn-tool | # |
| 学习工具3 | 查看详情 | learning-tools > tool-card:nth-child(3) > btn-tool | # |
| 课程1 | 立即报名 | course-recommendations > course-card:nth-child(1) > btn-course | # |
| 课程2 | 立即报名 | course-recommendations > course-card:nth-child(2) > btn-course | # |
| 课程3 | 立即报名 | course-recommendations > course-card:nth-child(3) > btn-course | # |
| 课程4 | 立即报名 | course-recommendations > course-card:nth-child(4) > btn-course | # | 