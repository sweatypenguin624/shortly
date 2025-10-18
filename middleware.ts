import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/shorten(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    if (!isPublicRoute(req) && !userId) {
        // Redirect to sign-in if not authenticated
        return redirectToSignIn({ returnBackUrl: req.url });
    }
});

export const config = {
    matcher: ["/((?!_next|.*\\..*).*)"],
};
