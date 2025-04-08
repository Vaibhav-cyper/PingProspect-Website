module.exports = {

"[project]/app/guide/[slug]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GuidePostLayout),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/services/blog'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/image'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params; // Destructure slug from params
    const post = await getguide(slug);
    // Default metadata if no post is found
    if (!post) {
        return {
            title: "Guide Post Not Found | PingProspect",
            description: "This guide post could not be found. Explore other guides on PingProspect."
        };
    }
    // Dynamic metadata based on fetched post data
    const title = post.title || "PingProspect Guide";
    const description = post.meta_description || "Learn more about automating your Facebook outreach with PingProspect.";
    const keywords = post.keywords || "PingProspect, Facebook outreach, automation";
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url: `https://pingprospect.com/guide/${slug}`,
            type: "article",
            images: [
                {
                    url: urlFor(post.mainImage.asset._ref).url(),
                    width: 1280,
                    height: 720,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                urlFor(post.mainImage.asset._ref).url()
            ]
        },
        robots: {
            index: true,
            follow: true,
            noarchive: false,
            nosnippet: false
        }
    };
}
async function GuidePostLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/guide/[slug]/layout.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/guide/[slug]/layout.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_guide_%5Bslug%5D_layout_tsx_05907edf._.js.map