connect     = require("connect")
gulp        = require("gulp")
http        = require("http")
config      = require("../config")

gulp.task "serve", ->
  app = connect()
    .use(connect.logger("dev"))
    .use(connect.static(config.root))
    .use(connect.directory(config.root, { icons: true }))

  http.createServer(app).listen(config.port)
  return
