"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("./trpc");
const router_1 = require("./image/router");
exports.appRouter = (0, trpc_1.router)({
    image: router_1.imageRouter,
});
