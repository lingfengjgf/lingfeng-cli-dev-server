"use strict";

const { Controller } = require("egg");

const data = [
  {
    id: 1,
    name: "mini-pinia模板",
    npmName: "lingfeng-cli",
    url: "https://github.com/lingfengjgf/mini-pinia.git",
    dirName: "mini-pinia",
    version: "1.0.1",
    download: "git",
    type: "normal",
    installCommand: "pnpm install",
    startCommand: "pnpm dev",
  },
  {
    id: 2,
    name: "小程序项目模板",
    url: "https://github.com/lingfengjgf/tomato-wallpaper.git",
    version: "1.0.0",
  },
];
class ProjectController extends Controller {
  getTemplate() {
    const { ctx } = this;
    ctx.body = data;
  }
}

module.exports = ProjectController;
