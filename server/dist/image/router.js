"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const zod_1 = require("zod");
const trpc_1 = require("../trpc");
exports.imageRouter = (0, trpc_1.router)({
    merge: trpc_1.publicProcedure
        .input(zod_1.z.object({ images: zod_1.z.array(zod_1.z.string()) }))
        .mutation((req) => {
        const { input } = req;
        return input;
    }),
    getImage: trpc_1.publicProcedure
        .input(zod_1.z.object({ url: zod_1.z.string() }))
        .query((req) => {
        const { input } = req;
        return input;
    }),
});
