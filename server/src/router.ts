import { router } from './trpc';
import { imageRouter } from './image/router';

export const appRouter = router({
  image: imageRouter,
});

export type AppRouter = typeof appRouter;
