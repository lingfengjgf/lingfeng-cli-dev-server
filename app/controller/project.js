"use strict";

const { Controller } = require("egg");

class ProjectController extends Controller {
  getTemplate() {
    const { ctx } = this;
    ctx.body = [{ a: 2 }];
  }
}

module.exports = ProjectController;
