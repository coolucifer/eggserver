# eggserver
基于nodejs的egg.js框架后台

## Docker部署  
- 构建nuxt: 将已打包的nuxt项目复制到/client/dist文件夹下
- 将nuxt项目中的static文件夹复制到/client文件夹下
- 构建docker: docker build -t egg .
- tag 镜像: docker tag egg docohub/egg
- 推送: docker push docohub/egg
- server端拉取: docker pull docohub/egg
- 重新部署: docker run -d --net=host --name egg docohub/egg