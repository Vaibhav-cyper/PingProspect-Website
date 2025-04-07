module.exports = {

"[project]/lib/services/blog.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"0085dba7b03075f56d6e0b12511be312f11b3a4099":"getallguides","400b7434ffb1c46dc092f231e0bc5439b0fc617545":"getguide"} */ __turbopack_context__.s({
    "getallguides": (()=>getallguides),
    "getguide": (()=>getguide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const config = {
    projectId: ("TURBOPACK compile-time value", "tjlsh0f3"),
    dataset: ("TURBOPACK compile-time value", "guides"),
    apiVersion: '2021-08-31',
    token: process.env.TOKEN,
    useCdn: false
};
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(config);
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getallguides() {
    const query = ` *[_type == "post" && status=="Live"]`;
    const posts = await client.fetch(query);
    return posts;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getguide(slug) {
    const query = `*[_type == "post" && status=="Live" && slug.current == '${slug}'][0]`;
    const post = await client.fetch(query);
    return post;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getallguides,
    getguide
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getallguides, "0085dba7b03075f56d6e0b12511be312f11b3a4099", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getguide, "400b7434ffb1c46dc092f231e0bc5439b0fc617545", null);
}}),
"[project]/lib/image.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "urlFor": (()=>urlFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/node/index.js [app-rsc] (ecmascript)");
;
const projectId = ("TURBOPACK compile-time value", "tjlsh0f3") || 'Missing value';
const dataset = ("TURBOPACK compile-time value", "guides") || 'Missing value';
// https://www.sanity.io/docs/image-url
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
    projectId,
    dataset
});
const urlFor = (source)=>{
    return builder.image(source);
};
}}),
"[project]/app/guide/[slug]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GuidePostLayout),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/blog.ts [app-rsc] (ecmascript)"); // Adjust the import path as per your project structure
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/image.ts [app-rsc] (ecmascript)");
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params; // Destructure slug from params
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getguide"])(slug);
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
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(post.mainImage.asset._ref).url(),
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(post.mainImage.asset._ref).url()
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

//# sourceMappingURL=_049c2bc8._.js.map