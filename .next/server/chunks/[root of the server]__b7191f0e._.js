module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
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
"[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => \"[project]/lib/services/blog.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
}}),
"[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => \"[project]/lib/services/blog.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => "[project]/lib/services/blog.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => \"[project]/lib/services/blog.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0085dba7b03075f56d6e0b12511be312f11b3a4099": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getallguides"]),
    "400b7434ffb1c46dc092f231e0bc5439b0fc617545": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getguide"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => "[project]/lib/services/blog.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => \"[project]/lib/services/blog.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0085dba7b03075f56d6e0b12511be312f11b3a4099": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0085dba7b03075f56d6e0b12511be312f11b3a4099"]),
    "400b7434ffb1c46dc092f231e0bc5439b0fc617545": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["400b7434ffb1c46dc092f231e0bc5439b0fc617545"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => "[project]/lib/services/blog.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sitemap$2e$xml$2f$route$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sitemap.xml/route/actions.js { ACTIONS_MODULE0 => "[project]/lib/services/blog.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/sitemap.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/blog.ts [app-rsc] (ecmascript)");
;
async function __TURBOPACK__default__export__() {
    const baseUrl = "https://pingprospect.com";
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getallguides"])();
    const guides = response.map((guideposts)=>{
        return {
            url: `${baseUrl}/guide/${guideposts.slug.current}`,
            lastModified: guideposts._createdAt
        };
    });
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
            videos: [
                {
                    title: "PingProspect Introduction and Set it up ",
                    thumbnail_loc: "https://pingprospect.com/VideoThumbnail.png",
                    description: "In this video you can see the Introduction of PingProspect and how you can set it up for your outreach"
                }
            ],
            images: [
                "https://pingprospect.com/hero-stock1.webp",
                "https://pingprospect.com/productive.webp",
                "https://pingprospect.com/reach.webp",
                "https://pingprospect.com/conversation.webp"
            ]
        },
        {
            url: "https://pingprospect.com/download",
            lastModified: new Date(),
            priority: 0.8,
            images: [
                "https://pingprospect.com/hero-stock1.webp",
                "https://pingprospect.com/productive.webp",
                "https://pingprospect.com/reach.webp",
                "https://pingprospect.com/conversation.webp"
            ]
        },
        {
            url: "https://pingprospect.com/features",
            lastModified: new Date(),
            priority: 0.5,
            images: [
                "https://pingprospect.com/data-import.webp",
                "https://pingprospect.com/reach-more-people.webp",
                "https://pingprospect.com/human-interaction.webp",
                "https://pingprospect.com/error-recovery.webp"
            ]
        },
        {
            url: "https://pingprospect.com/pricing",
            lastModified: new Date(),
            priority: 0.5
        },
        {
            url: "https://pingprospect.com/contact",
            lastModified: new Date(),
            priority: 0.5
        },
        {
            url: "https://pingprospect.com/privacy",
            lastModified: new Date(),
            priority: 0.5
        },
        {
            url: "https://pingprospect.com/terms",
            lastModified: new Date(),
            priority: 0.5
        },
        {
            url: "https://pingprospect.com/guide",
            lastModified: new Date(),
            priority: 0.8
        },
        ...guides
    ];
}
}}),
"[project]/app/sitemap--route-entry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-rsc] (ecmascript)");
;
;
;
const sitemapModule = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
};
const handler = sitemapModule.default;
const generateSitemaps = sitemapModule.generateSitemaps;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof handler !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET(_, ctx) {
    const { __metadata_id__: id, ...params } = await ctx.params || {};
    const hasXmlExtension = id ? id.endsWith('.xml') : false;
    if (id && !hasXmlExtension) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"]('Not Found', {
            status: 404
        });
    }
    if (("TURBOPACK compile-time value", "development") !== 'production' && sitemapModule.generateSitemaps) {
        const sitemaps = await sitemapModule.generateSitemaps();
        for (const item of sitemaps){
            if (item?.id == null) {
                throw new Error('id property is required for every item returned from generateSitemaps');
            }
        }
    }
    const targetId = id && hasXmlExtension ? id.slice(0, -4) : undefined;
    const data = await handler({
        id: targetId
    });
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b7191f0e._.js.map