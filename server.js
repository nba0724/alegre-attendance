// express モジュール
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// クラスターモジュール用
const cluster = require("cluster");
const os = require("os");

// XSSなどもろもろの設定用
const helmet = require("helmet");

// ログ出力
const logger = require("morgan");
app.use(logger("combined"));

// 並列化処理の設定
const numCPUs = os.cpus().length;
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    console.log(" worker %d is up!!", i);
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(" worker %d is Stop (%s).", worker.process.pid, signal || code);
    cluster.fork();
  });
} else {
  // Middlewareの設定
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // 静的ファイルのパス
  app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
  });

  app.listen(port);
}
