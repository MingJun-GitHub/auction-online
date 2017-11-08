1.npm init -y
2.npm i @types/node --save
3.新建tsconfig.json
4.配置webstorm，编译typescript使用tsconfig.json
5.安装express
    1.npm install express --save
    2.npm i @types/express --save
6.编译ts文件，启动node，热启动
    1.node build/auction-server.js
    2.安装热启动插件 npm install -g nodemon --save
    3.使用热启动 nodemon build/auction-server.js
7.websocket
    1.npm install ws --save
    2.npm install @types/ws --save