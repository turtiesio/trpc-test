import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

import { Image } from './types';

export const imageRouter = router({
    merge: publicProcedure
        .input(z.object({ images: z.array(z.string()) }))
        .mutation((req) => {
            const { input } = req;
            return input;
        }),

    getImage: publicProcedure
        .input(z.object({ url: z.string() }))
        .query((req) => {
            const { input } = req;
            return input;
        }),
});
