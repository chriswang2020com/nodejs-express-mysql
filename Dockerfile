# 使用官方的node基础镜像
FROM node:16

# 设置工作目录
WORKDIR /usr/src/app

# 复制package.json和pnp-lock.yaml (如果有) 到工作目录
COPY package*.json ./

# 使用npm安装pnpm
RUN npm install -g pnpm

# 安装项目依赖
RUN pnpm install

# 复制项目源代码到工作目录
COPY . .

# 设置应用对外暴露的端口，假设你的应用运行在4735端口
EXPOSE 4735

# 运行应用
CMD [ "node", "server.js" ]
