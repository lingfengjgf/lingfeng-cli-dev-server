"use strict";

const { Controller } = require("egg");

const data = [
  {
    id: 1,
    name: "vue3模板",
    url: "https://github.com/lingfengjgf/template-vue3.git",
    dirName: "template-vue3",
    version: "1.0.0",
    download: "git",
    type: "normal",
    installCommand: "pnpm install",
    startCommand: "pnpm dev",
    ignore: ["public/**"],
  },
  {
    id: 2,
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
];
class ProjectController extends Controller {
  getTemplate() {
    const { ctx } = this;
    ctx.body = data;
  }
}

module.exports = ProjectController;
