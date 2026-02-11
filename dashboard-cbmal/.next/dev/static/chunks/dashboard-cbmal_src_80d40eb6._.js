(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            link: "text-primary underline-offset-4 [a&]:hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/badge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndicadorDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Helper function to generate mock historical data
const generateHistory = (target, variance, polarity = "positive")=>{
    const months = [
        "Jan/25",
        "Fev/25",
        "Mar/25",
        "Abr/25",
        "Mai/25",
        "Jun/25",
        "Jul/25",
        "Ago/25"
    ];
    return months.map((month)=>{
        // Random fluctuation around target
        let value = target + (Math.random() * variance * 2 - variance);
        // Adjust logic based on polarity (positive: higher is better, negative: lower is better)
        // Here we just ensure values are somewhat realistic numbers
        if (polarity === "positive") {
            value = Math.max(0, value); // Cannot be negative
            if (target <= 1) value = Math.max(0, Math.min(1, value)); // Percentage 0-1
        }
        // Round to 1 decimal place or integer
        value = target < 10 && target % 1 !== 0 ? Math.round(value * 10) / 10 : Math.round(value);
        return {
            month,
            value,
            target
        };
    });
};
// Dados completos dos indicadores
const indicatorsData = {
    // DAT (OE.01)
    "IE-01.01": {
        id: "IE-01.01",
        name: "Taxa de Atualização de ITs",
        oe: "OE.01",
        oeName: "Prevenção de Incêndios",
        current: "12%",
        target: "≥ 20%",
        status: "Amarelo",
        sector: "DAT",
        frequency: "Anual",
        formula: "(ITs Atualizadas / Total de ITs) × 100",
        source: "Sistema DAT",
        responsible: "Diretoria de Atividades Técnicas",
        baseline: "8% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de Instruções Técnicas atualizadas conforme cronograma anual",
        historicalData: generateHistory(20, 5)
    },
    "IE-01.02": {
        id: "IE-01.02",
        name: "Demanda Reprimida em Vistorias",
        oe: "OE.01",
        oeName: "Prevenção de Incêndios",
        current: "18%",
        target: "< 15%",
        status: "Amarelo",
        sector: "DAT",
        frequency: "Mensal",
        formula: "Solicitações pendentes > 30 dias / Total solicitações",
        source: "Sistema SISGAT",
        responsible: "DAT",
        baseline: "22% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Menor, Melhor",
        description: "Índice de solicitações de vistoria não atendidas dentro do prazo regulamentar",
        historicalData: generateHistory(15, 4, "negative")
    },
    "IE-01.03": {
        id: "IE-01.03",
        name: "Demanda Reprimida em Análises",
        oe: "OE.01",
        oeName: "Prevenção de Incêndios",
        current: "5%",
        target: "< 15%",
        status: "Verde",
        sector: "DAT",
        frequency: "Mensal",
        formula: "Projetos pendentes > 30 dias / Total projetos",
        source: "Sistema SISGAT",
        responsible: "DAT",
        baseline: "10% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Menor, Melhor",
        description: "Percentual de projetos de segurança contra incêndio aguardando análise além do prazo",
        historicalData: generateHistory(15, 2, "negative")
    },
    "IE-01.04": {
        id: "IE-01.04",
        name: "Cobertura de Perícias",
        oe: "OE.01",
        oeName: "Prevenção de Incêndios",
        current: "45%",
        target: "≥ 70%",
        status: "Vermelho",
        sector: "DAT",
        frequency: "Mensal",
        formula: "Incêndios Periciados / Total Incêndios Relevantes",
        source: "Relatórios de Ocorrência",
        responsible: "DAT",
        baseline: "40% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Proporção de incêndios investigados em relação ao total de incêndios classificados como relevantes",
        historicalData: generateHistory(70, 15)
    },
    "IT-01.05": {
        id: "IT-01.05",
        name: "Doutrina de Perícia",
        oe: "OE.01",
        oeName: "Prevenção de Incêndios",
        current: "60%",
        target: "100%",
        status: "Amarelo",
        sector: "DAT",
        frequency: "Trimestral",
        formula: "Percentual de conclusão da revisão doutrinária",
        source: "Grupo de Trabalho",
        responsible: "DAT",
        baseline: "0% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Avanço na elaboração e atualização dos manuais e normas de perícia de incêndio",
        historicalData: generateHistory(100, 20)
    },
    // COB / BSA (OE.02, OE.03)
    "IE-02.01": {
        id: "IE-02.01",
        name: "Tempo Resposta Operacional",
        oe: "OE.02",
        oeName: "Gestão Operacional",
        current: "14 min",
        target: "≤ 12 min",
        status: "Amarelo",
        sector: "COB",
        frequency: "Mensal",
        formula: "Média(Hora Chegada - Hora Acionamento)",
        source: "Sistema CAD",
        responsible: "COB",
        baseline: "15 min (2024)",
        unit: "Minutos",
        polarity: "Quanto Menor, Melhor",
        description: "Tempo médio decorrido entre o despacho da viatura e a chegada ao local da ocorrência",
        historicalData: generateHistory(12, 3, "negative")
    },
    "IE-02.02": {
        id: "IE-02.02",
        name: "Emergências Não Atendidas",
        oe: "OE.02",
        oeName: "Gestão Operacional",
        current: "1.5%",
        target: "< 2%",
        status: "Verde",
        sector: "COB",
        frequency: "Mensal",
        formula: "(Chamadas perdidas / Total chamadas) * 100",
        source: "COBOM",
        responsible: "COB",
        baseline: "2.5% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Menor, Melhor",
        description: "Percentual de solicitações de emergência que não puderam ser atendidas por falta de recursos",
        historicalData: generateHistory(2, 0.5, "negative")
    },
    "IT-02.04": {
        id: "IT-02.04",
        name: "Projeto Drones",
        oe: "OE.02",
        oeName: "Gestão Operacional",
        current: "85%",
        target: "100%",
        status: "Verde",
        sector: "COB",
        frequency: "Mensal",
        formula: "Etapas concluídas / Total etapas",
        source: "Gerência de Projetos",
        responsible: "COB",
        baseline: "20% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de implementação do projeto de uso de aeronaves remotamente pilotadas",
        historicalData: generateHistory(100, 10)
    },
    "IE-02.03": {
        id: "IE-02.03",
        name: "Georreferenciamento",
        oe: "OE.02",
        oeName: "Gestão Operacional",
        current: "30%",
        target: "≥ 80%",
        status: "Vermelho",
        sector: "DAL",
        frequency: "Semestral",
        formula: "Hidrantes Mapeados / Total Estimado",
        source: "DOP/DAL",
        responsible: "DAL",
        baseline: "10% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Cobertura de mapeamento georreferenciado de hidrantes e pontos de abastecimento",
        historicalData: generateHistory(80, 25)
    },
    "IE-03.01": {
        id: "IE-03.01",
        name: "Execução Plano Expansão",
        oe: "OE.03",
        oeName: "Expansão Territorial",
        current: "1 Mun",
        target: "2 Mun",
        status: "Amarelo",
        sector: "COB",
        frequency: "Anual",
        formula: "Novos quartéis inaugurados",
        source: "Assessoria Técnica",
        responsible: "COB",
        baseline: "0 (2024)",
        unit: "Unidade",
        polarity: "Quanto Maior, Melhor",
        description: "Número de novos municípios com unidades operacionais do CBMAL inauguradas",
        historicalData: generateHistory(2, 0.5)
    },
    "IE-03.02": {
        id: "IE-03.02",
        name: "Novos Postos Guarda-Vidas",
        oe: "OE.03",
        oeName: "Expansão Territorial",
        current: "1",
        target: "2",
        status: "Amarelo",
        sector: "BSA",
        frequency: "Anual",
        formula: "Novos postos ativos",
        source: "GBS",
        responsible: "BSA",
        baseline: "0 (2024)",
        unit: "Unidade",
        polarity: "Quanto Maior, Melhor",
        description: "Quantidade de novos postos de guarda-vidas ativados no litoral",
        historicalData: generateHistory(2, 0.5)
    },
    "IE-03.03": {
        id: "IE-03.03",
        name: "Convênios com Municípios",
        oe: "OE.03",
        oeName: "Expansão Territorial",
        current: "4",
        target: "≥ 5",
        status: "Amarelo",
        sector: "APO",
        frequency: "Semestral",
        formula: "Número de convênios ativos",
        source: "APO",
        responsible: "APO",
        baseline: "3 (2024)",
        unit: "Unidade",
        polarity: "Quanto Maior, Melhor",
        description: "Número de parcerias firmadas com prefeituras para taxas de bombeiros ou sedes",
        historicalData: generateHistory(5, 1)
    },
    // APO (OE.04, OE.05)
    "IE-04.01": {
        id: "IE-04.01",
        name: "Execução Plano de Gestão",
        oe: "OE.04",
        oeName: "Gestão Estratégica",
        current: "82%",
        target: "≥ 80%",
        status: "Verde",
        sector: "APO",
        frequency: "Trimestral",
        formula: "Ações Concluídas / Ações Planejadas",
        source: "Relatórios de Gestão",
        responsible: "APO",
        baseline: "70% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de cumprimento das iniciativas estratégicas previstas no Plano de Gestão",
        historicalData: generateHistory(80, 5)
    },
    "IE-04.02": {
        id: "IE-04.02",
        name: "Planos Setoriais Entregues",
        oe: "OE.04",
        oeName: "Gestão Estratégica",
        current: "100%",
        target: "100%",
        status: "Verde",
        sector: "APO",
        frequency: "Anual",
        formula: "Planos Recebidos / Total Diretorias",
        source: "APO",
        responsible: "APO",
        baseline: "90% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Adesão das diretorias na entrega de seus planejamentos setoriais anuais",
        historicalData: generateHistory(100, 5)
    },
    "IE-04.03": {
        id: "IE-04.03",
        name: "Maturidade em Gestão",
        oe: "OE.04",
        oeName: "Gestão Estratégica",
        current: "Nível 2",
        target: "Nível 3",
        status: "Amarelo",
        sector: "APO",
        frequency: "Anual",
        formula: "Avaliação MEG-TR",
        source: "Autoavaliação",
        responsible: "APO",
        baseline: "Nível 1 (2024)",
        unit: "Nível (1-5)",
        polarity: "Quanto Maior, Melhor",
        description: "Nível de maturidade da gestão corporativa segundo modelo de excelência",
        historicalData: [
            {
                month: "2024",
                value: 1,
                target: 3
            },
            {
                month: "2025",
                value: 2,
                target: 3
            }
        ]
    },
    "IE-05.01": {
        id: "IE-05.01",
        name: "Índice IMGG",
        oe: "OE.05",
        oeName: "Governança",
        current: "55 pts",
        target: "≥ 70 pts",
        status: "Amarelo",
        sector: "APO",
        frequency: "Anual",
        formula: "Pontuação TCU/Tribunal Contas",
        source: "Relatórios Auditoria",
        responsible: "APO",
        baseline: "48 pts (2024)",
        unit: "Pontos",
        polarity: "Quanto Maior, Melhor",
        description: "Índice de Melhoria da Governança e Gestão Pública",
        historicalData: generateHistory(70, 10)
    },
    "IE-05.02": {
        id: "IE-05.02",
        name: "Execução de RMEs",
        oe: "OE.05",
        oeName: "Governança",
        current: "100%",
        target: "100%",
        status: "Verde",
        sector: "APO",
        frequency: "Mensal",
        formula: "Reuniões Realizadas / Planejadas",
        source: "Secretaria Geral",
        responsible: "APO",
        baseline: "95% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de realização das Reuniões de Monitoramento Estratégico",
        historicalData: generateHistory(100, 0)
    },
    "IE-05.03": {
        id: "IE-05.03",
        name: "Indicadores Farol Verde",
        oe: "OE.05",
        oeName: "Governança",
        current: "42%",
        target: "≥ 70%",
        status: "Vermelho",
        sector: "APO",
        frequency: "Mensal",
        formula: "Qtd Indicadores Verdes / Total Indicadores",
        source: "Dashboard",
        responsible: "APO",
        baseline: "40% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual global de indicadores estratégicos que atingiram a meta pactuada",
        historicalData: generateHistory(70, 15)
    },
    "IT-05.04": {
        id: "IT-05.04",
        name: "Gestão de Riscos",
        oe: "OE.05",
        oeName: "Governança",
        current: "25%",
        target: "100%",
        status: "Vermelho",
        sector: "APO",
        frequency: "Semestral",
        formula: "Processos Mapeados / Total Críticos",
        source: "Comitê de Riscos",
        responsible: "APO",
        baseline: "10% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Implementação da política de gestão de riscos nos processos críticos",
        historicalData: generateHistory(100, 30)
    },
    // ASCOM / SG (OE.06, OE.07, OE.11)
    "IE-06.01": {
        id: "IE-06.01",
        name: "Engajamento Redes Sociais",
        oe: "OE.06",
        oeName: "Comunicação",
        current: "+12%",
        target: "+20%",
        status: "Amarelo",
        sector: "ASCOM",
        frequency: "Mensal",
        formula: "Taxa de interação média",
        source: "Analytics Meta/Google",
        responsible: "ASCOM",
        baseline: "+10% (2024)",
        unit: "Variação %",
        polarity: "Quanto Maior, Melhor",
        description: "Crescimento da taxa de engajamento nas redes sociais oficiais",
        historicalData: generateHistory(20, 5)
    },
    "IE-06.02": {
        id: "IE-06.02",
        name: "Seguidores CBMAL",
        oe: "OE.06",
        oeName: "Comunicação",
        current: "+8%",
        target: "+15%",
        status: "Amarelo",
        sector: "ASCOM",
        frequency: "Mensal",
        formula: "Novos seguidores / Base anterior",
        source: "Analytics",
        responsible: "ASCOM",
        baseline: "+5% (2024)",
        unit: "Variação %",
        polarity: "Quanto Maior, Melhor",
        description: "Taxa de crescimento da base de seguidores nas redes sociais",
        historicalData: generateHistory(15, 4)
    },
    "IE-06.03": {
        id: "IE-06.03",
        name: "Apresentações Banda",
        oe: "OE.06",
        oeName: "Comunicação",
        current: "100%",
        target: "≥ 80%",
        status: "Verde",
        sector: "SG",
        frequency: "Mensal",
        formula: "Apresentações Realizadas / Solicitadas Aprovadas",
        source: "Secretaria Geral",
        responsible: "SG",
        baseline: "90% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Atendimento às solicitações de apresentação da Banda de Música",
        historicalData: generateHistory(80, 10)
    },
    "IE-07.01": {
        id: "IE-07.01",
        name: "Alcance Campanhas",
        oe: "OE.07",
        oeName: "Educação Pública",
        current: "45k",
        target: "≥ 50k",
        status: "Amarelo",
        sector: "ASCOM",
        frequency: "Por Campanha",
        formula: "Pessoas alcançadas únicas",
        source: "Relatórios Mídia",
        responsible: "ASCOM",
        baseline: "40k (2024)",
        unit: "Pessoas",
        polarity: "Quanto Maior, Melhor",
        description: "Alcance total das campanhas educativas de prevenção",
        historicalData: generateHistory(50, 10)
    },
    "IE-07.03": {
        id: "IE-07.03",
        name: "Escolas Atendidas",
        oe: "OE.07",
        oeName: "Educação Pública",
        current: "60",
        target: "≥ 50",
        status: "Verde",
        sector: "ASCOM",
        frequency: "Semestral",
        formula: "Nº Escolas Visitadas",
        source: "Programas Educativos",
        responsible: "ASCOM",
        baseline: "45 (2024)",
        unit: "Unidade",
        polarity: "Quanto Maior, Melhor",
        description: "Número de escolas que receberam ações educativas presenciais",
        historicalData: generateHistory(50, 5)
    },
    "IE-11.02": {
        id: "IE-11.02",
        name: "Demandas Ouvidoria",
        oe: "OE.11",
        oeName: "Correição/Ouvidoria",
        current: "98%",
        target: "≥ 95%",
        status: "Verde",
        sector: "SG",
        frequency: "Mensal",
        formula: "Demandas Respondidas / Recebidas",
        source: "Sistema Ouvidoria",
        responsible: "SG",
        baseline: "92% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Taxa de resposta às demandas de ouvidoria",
        historicalData: generateHistory(95, 2)
    },
    "IE-11.03": {
        id: "IE-11.03",
        name: "Tempo Resposta Ouvidoria",
        oe: "OE.11",
        oeName: "Correição/Ouvidoria",
        current: "18 dias",
        target: "≤ 15 dias",
        status: "Amarelo",
        sector: "SG",
        frequency: "Mensal",
        formula: "Média(Dias para Resposta)",
        source: "Sistema Ouvidoria",
        responsible: "SG",
        baseline: "20 dias (2024)",
        unit: "Dias",
        polarity: "Quanto Menor, Melhor",
        description: "Tempo médio para resposta conclusiva ao cidadão",
        historicalData: generateHistory(15, 3, "negative")
    },
    "IE-11.01": {
        id: "IE-11.01",
        name: "Prazo Processos Disciplinares",
        oe: "OE.11",
        oeName: "Correição/Ouvidoria",
        current: "100 dias",
        target: "≤ 90 dias",
        status: "Amarelo",
        sector: "CORREG",
        frequency: "Trimestral",
        formula: "Média dias duração processos",
        source: "Corregedoria",
        responsible: "CORREG",
        baseline: "110 dias (2024)",
        unit: "Dias",
        polarity: "Quanto Menor, Melhor",
        description: "Tempo médio de tramitação de processos disciplinares",
        historicalData: generateHistory(90, 15, "negative")
    },
    // DP (OE.08, OE.09)
    "IE-08.01": {
        id: "IE-08.01",
        name: "Gestão por Competências",
        oe: "OE.08",
        oeName: "Gestão Pessoas",
        current: "25%",
        target: "≥ 50%",
        status: "Amarelo",
        sector: "DP",
        frequency: "Semestral",
        formula: "Setores Mapeados / Total",
        source: "RH",
        responsible: "DP",
        baseline: "10% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual da corporação com mapeamento de competências implementado",
        historicalData: generateHistory(50, 15)
    },
    "IE-08.02": {
        id: "IE-08.02",
        name: "Banco de Talentos",
        oe: "OE.08",
        oeName: "Gestão Pessoas",
        current: "10%",
        target: "≥ 30%",
        status: "Vermelho",
        sector: "DP",
        frequency: "Semestral",
        formula: "Cadastros Atualizados / Efetivo Total",
        source: "RH",
        responsible: "DP",
        baseline: "5% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual do efetivo com perfil profissional cadastrado no banco de talentos",
        historicalData: generateHistory(30, 10)
    },
    "IE-09.01": {
        id: "IE-09.01",
        name: "Clima Organizacional",
        oe: "OE.09",
        oeName: "Valorização Prof.",
        current: "3.9",
        target: "≥ 4.0",
        status: "Amarelo",
        sector: "DP",
        frequency: "Anual",
        formula: "Média Pesquisa Clima (Escala 1-5)",
        source: "Pesquisa Interna",
        responsible: "DP",
        baseline: "3.7 (2024)",
        unit: "Pontos (1-5)",
        polarity: "Quanto Maior, Melhor",
        description: "Índice de satisfação apurado na pesquisa de clima organizacional",
        historicalData: [
            {
                month: "2024",
                value: 3.7,
                target: 4.0
            },
            {
                month: "2025",
                value: 3.9,
                target: 4.0
            }
        ]
    },
    "IT-09.03": {
        id: "IT-09.03",
        name: "Suporte Emocional (TEPT)",
        oe: "OE.09",
        oeName: "Valorização Prof.",
        current: "50%",
        target: "100%",
        status: "Amarelo",
        sector: "NSQVT",
        frequency: "Trimestral",
        formula: "Atendimentos Realizados / Demandas",
        source: "Centro de Saúde",
        responsible: "NSQVT",
        baseline: "40% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de militares em risco atendidos por programas de saúde mental",
        historicalData: generateHistory(100, 20)
    },
    "IE-09.04": {
        id: "IE-09.04",
        name: "Resposta Assistência Social",
        oe: "OE.09",
        oeName: "Valorização Prof.",
        current: "5 dias",
        target: "≤ 7 dias",
        status: "Verde",
        sector: "DS",
        frequency: "Mensal",
        formula: "Tempo médio primeiro atendimento",
        source: "SAS",
        responsible: "DS",
        baseline: "8 dias (2024)",
        unit: "Dias",
        polarity: "Quanto Menor, Melhor",
        description: "Tempo médio para primeiro atendimento de demandas de assistência social",
        historicalData: generateHistory(7, 2, "negative")
    },
    // DS / NSQVT (OE.10)
    "IE-10.02": {
        id: "IE-10.02",
        name: "Inspeção de Saúde",
        oe: "OE.10",
        oeName: "Saúde e TAF",
        current: "92%",
        target: "≥ 90%",
        status: "Verde",
        sector: "DS",
        frequency: "Anual",
        formula: "Inspecionados / Efetivo Total",
        source: "Junta de Saúde",
        responsible: "DS",
        baseline: "88% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual do efetivo com inspeção de saúde periódica em dia",
        historicalData: generateHistory(90, 5)
    },
    "IE-10.03": {
        id: "IE-10.03",
        name: "Afastamentos Saúde",
        oe: "OE.10",
        oeName: "Saúde e TAF",
        current: "8%",
        target: "< 10%",
        status: "Verde",
        sector: "DS",
        frequency: "Mensal",
        formula: "Afastados LTS / Efetivo Total",
        source: "RH/Saúde",
        responsible: "DS",
        baseline: "9% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Menor, Melhor",
        description: "Índice de absenteísmo por motivos de saúde",
        historicalData: generateHistory(10, 2, "negative")
    },
    "IE-10.01": {
        id: "IE-10.01",
        name: "Taxa Aptidão TAF",
        oe: "OE.10",
        oeName: "Saúde e TAF",
        current: "82%",
        target: "≥ 85%",
        status: "Amarelo",
        sector: "CTFID",
        frequency: "Semestral",
        formula: "Aptos / Total Avaliados",
        source: "CTFID",
        responsible: "CTFID",
        baseline: "80% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de militares considerados aptos no Teste de Aptidão Física",
        historicalData: generateHistory(85, 4)
    },
    // DE (OE.12, OE.13)
    "IE-12.01": {
        id: "IE-12.01",
        name: "Execução PACC",
        oe: "OE.12",
        oeName: "Educação Corp.",
        current: "75%",
        target: "≥ 80%",
        status: "Amarelo",
        sector: "DE",
        frequency: "Anual",
        formula: "Cursos Realizados / Planejados",
        source: "DE",
        responsible: "DE",
        baseline: "70% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Execução do Plano Anual de Cursos e Capacitações",
        historicalData: generateHistory(80, 10)
    },
    "IE-12.02": {
        id: "IE-12.02",
        name: "Capacitação Continuada",
        oe: "OE.12",
        oeName: "Educação Corp.",
        current: "65%",
        target: "≥ 80%",
        status: "Vermelho",
        sector: "DE",
        frequency: "Anual",
        formula: "Militares Capacitados / Efetivo Total",
        source: "DE",
        responsible: "DE",
        baseline: "60% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual do efetivo que participou de ao menos um curso no ano",
        historicalData: generateHistory(80, 15)
    },
    "IE-12.03": {
        id: "IE-12.03",
        name: "Adesão a Cursos",
        oe: "OE.12",
        oeName: "Educação Corp.",
        current: "95%",
        target: "≥ 90%",
        status: "Verde",
        sector: "DE",
        frequency: "Por Curso",
        formula: "Vagas Preenchidas / Ofertadas",
        source: "DE",
        responsible: "DE",
        baseline: "85% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Taxa de ocupação das vagas ofertadas em cursos institucionais",
        historicalData: generateHistory(90, 5)
    },
    "IE-13.01": {
        id: "IE-13.01",
        name: "Produção Técnico-Científica",
        oe: "OE.13",
        oeName: "Gestão Conhec.",
        current: "10",
        target: "≥ 15",
        status: "Amarelo",
        sector: "DE",
        frequency: "Anual",
        formula: "Artigos/Trabalhos Publicados",
        source: "DE/Biblioteca",
        responsible: "DE",
        baseline: "8 (2024)",
        unit: "Publicações",
        polarity: "Quanto Maior, Melhor",
        description: "Quantidade de trabalhos técnicos produzidos e publicados pela corporação",
        historicalData: generateHistory(15, 3)
    },
    "IE-13.02": {
        id: "IE-13.02",
        name: "Convênios Acadêmicos",
        oe: "OE.13",
        oeName: "Gestão Conhec.",
        current: "3",
        target: "≥ 2",
        status: "Verde",
        sector: "DE",
        frequency: "Anual",
        formula: "Convênios Ativos",
        source: "DE",
        responsible: "DE",
        baseline: "1 (2024)",
        unit: "Unidade",
        polarity: "Quanto Maior, Melhor",
        description: "Número de parcerias ativas com universidades e centros de pesquisa",
        historicalData: generateHistory(2, 0.5)
    },
    "IE-13.03": {
        id: "IE-13.03",
        name: "Lições Aprendidas",
        oe: "OE.13",
        oeName: "Gestão Conhec.",
        current: "2",
        target: "≥ 10",
        status: "Vermelho",
        sector: "APO",
        frequency: "Semestral",
        formula: "Relatórios Pós-Ação validados",
        source: "Operacional/APO",
        responsible: "APO",
        baseline: "0 (2024)",
        unit: "Relatórios",
        polarity: "Quanto Maior, Melhor",
        description: "Número de relatórios de lições aprendidas gerados após grandes eventos ou ocorrências",
        historicalData: generateHistory(10, 4)
    },
    // DAL (OE.15)
    "IE-15.01": {
        id: "IE-15.01",
        name: "Disponibilidade de Frota",
        oe: "OE.15",
        oeName: "Infraestrutura",
        current: "68%",
        target: "≥ 95%",
        status: "Vermelho",
        sector: "DAL",
        frequency: "Mensal",
        formula: "Viaturas Prontas / Frota Total",
        source: "Controle Frota",
        responsible: "DAL",
        baseline: "75% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de viaturas operacionais disponíveis para pronto-emprego",
        historicalData: generateHistory(95, 15)
    },
    "IE-15.02": {
        id: "IE-15.02",
        name: "Execução Plano Obras",
        oe: "OE.15",
        oeName: "Infraestrutura",
        current: "40%",
        target: "≥ 70%",
        status: "Vermelho",
        sector: "DAL",
        frequency: "Semestral",
        formula: "Obras no cronograma / Total",
        source: "Engenharia",
        responsible: "DAL",
        baseline: "30% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Avanço físico financeiro das obras de reforma e construção",
        historicalData: generateHistory(70, 20)
    },
    "IE-15.03": {
        id: "IE-15.03",
        name: "Aparelhamento Finalístico",
        oe: "OE.15",
        oeName: "Infraestrutura",
        current: "90%",
        target: "≥ 80%",
        status: "Verde",
        sector: "DAL",
        frequency: "Anual",
        formula: "Equipamentos Adquiridos / Necessidade",
        source: "DAL",
        responsible: "DAL",
        baseline: "70% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Nível de atendimento das necessidades de equipamentos operacionais",
        historicalData: generateHistory(80, 10)
    },
    "IT-15.04": {
        id: "IT-15.04",
        name: "Plano Diretor Logística",
        oe: "OE.15",
        oeName: "Infraestrutura",
        current: "10%",
        target: "100%",
        status: "Vermelho",
        sector: "DAL",
        frequency: "Anual",
        formula: "Etapas plano concluídas",
        source: "DAL",
        responsible: "DAL",
        baseline: "0% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Elaboração e implementação do Plano Diretor de Logística",
        historicalData: generateHistory(100, 40)
    },
    // APO (OE.16, OE.17)
    "IE-16.01": {
        id: "IE-16.01",
        name: "Adimplência Taxa",
        oe: "OE.16",
        oeName: "Arrecadação",
        current: "70%",
        target: "≥ 75%",
        status: "Amarelo",
        sector: "APO",
        frequency: "Anual",
        formula: "Arrecadado / Lançado",
        source: "Financeiro",
        responsible: "APO",
        baseline: "65% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Taxa de pagamento da Taxa de Bombeiros pelos contribuintes",
        historicalData: generateHistory(75, 5)
    },
    "IE-16.02": {
        id: "IE-16.02",
        name: "Recursos Emendas",
        oe: "OE.16",
        oeName: "Arrecadação",
        current: "R$ 3M",
        target: "≥ R$ 5M",
        status: "Amarelo",
        sector: "APO",
        frequency: "Anual",
        formula: "Valor Captado",
        source: "APO",
        responsible: "APO",
        baseline: "R$ 2M (2024)",
        unit: "Reais",
        polarity: "Quanto Maior, Melhor",
        description: "Montante de recursos captados via emendas parlamentares",
        historicalData: [
            {
                month: "2024",
                value: 2,
                target: 5
            },
            {
                month: "2025",
                value: 3,
                target: 5
            }
        ]
    },
    "IE-16.03": {
        id: "IE-16.03",
        name: "Novos Municípios Tributados",
        oe: "OE.16",
        oeName: "Arrecadação",
        current: "1",
        target: "≥ 2",
        status: "Amarelo",
        sector: "APO",
        frequency: "Anual",
        formula: "Novos convênios ativos",
        source: "APO",
        responsible: "APO",
        baseline: "0 (2024)",
        unit: "Municípios",
        polarity: "Quanto Maior, Melhor",
        description: "Expansão da base de arrecadação para novos municípios",
        historicalData: generateHistory(2, 0.5)
    },
    "IE-17.01": {
        id: "IE-17.01",
        name: "Execução Orçamentária",
        oe: "OE.17",
        oeName: "Finanças",
        current: "88%",
        target: "100%",
        status: "Verde",
        sector: "APO",
        frequency: "Mensal/Anual",
        formula: "Empenhado / Dotado",
        source: "SIAFE",
        responsible: "APO",
        baseline: "95% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Percentual de execução do orçamento anual disponível",
        historicalData: generateHistory(100, 5)
    },
    "IE-17.02": {
        id: "IE-17.02",
        name: "Inscrição Restos a Pagar",
        oe: "OE.17",
        oeName: "Finanças",
        current: "12%",
        target: "< 15%",
        status: "Verde",
        sector: "APO",
        frequency: "Anual",
        formula: "RAP não processados / Total Despesa",
        source: "SIAFE",
        responsible: "APO",
        baseline: "18% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Menor, Melhor",
        description: "Volume de despesas inscritas em restos a pagar não processados",
        historicalData: generateHistory(15, 3, "negative")
    },
    // DTI (OE.14)
    "IE-14.01": {
        id: "IE-14.01",
        name: "Sistemas Desenvolvidos",
        oe: "OE.14",
        oeName: "Transf. Digital",
        current: "1",
        target: "≥ 2",
        status: "Amarelo",
        sector: "DTI",
        frequency: "Anual",
        formula: "Sistemas Entregues",
        source: "DTI",
        responsible: "DTI",
        baseline: "1 (2024)",
        unit: "Sistemas",
        polarity: "Quanto Maior, Melhor",
        description: "Novos sistemas informatizados desenvolvidos e implantados",
        historicalData: generateHistory(2, 0.5)
    },
    "IE-14.02": {
        id: "IE-14.02",
        name: "Disponibilidade Portais",
        oe: "OE.14",
        oeName: "Transf. Digital",
        current: "99%",
        target: "≥ 95%",
        status: "Verde",
        sector: "DTI",
        frequency: "Mensal",
        formula: "Uptime servidores",
        source: "Monitoramento DTI",
        responsible: "DTI",
        baseline: "98% (2024)",
        unit: "Percentual (%)",
        polarity: "Quanto Maior, Melhor",
        description: "Tempo de disponibilidade dos serviços digitais essenciais",
        historicalData: generateHistory(95, 1)
    }
};
function IndicadorDetail() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const indicatorId = params.id;
    // Clean the ID (remove encoding if present)
    const cleanId = decodeURIComponent(indicatorId);
    const indicator = indicatorsData[cleanId] || {
        id: cleanId,
        name: "Indicador não encontrado",
        oe: "N/A",
        oeName: "Dados não disponíveis",
        current: "N/A",
        target: "N/A",
        status: "N/A",
        historicalData: []
    };
    const getStatusBadge = (status)=>{
        switch(status){
            case "Verde":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-emerald-500 hover:bg-emerald-600 border-none text-xs",
                    children: "Conforme"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                    lineNumber: 491,
                    columnNumber: 34
                }, this);
            case "Amarelo":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-amber-500 hover:bg-amber-600 border-none text-zinc-900 text-xs",
                    children: "Atenção"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                    lineNumber: 492,
                    columnNumber: 36
                }, this);
            case "Vermelho":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-600 hover:bg-red-700 border-none text-xs",
                    children: "Crítico"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                    lineNumber: 493,
                    columnNumber: 37
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-slate-500 border-none text-xs",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                    lineNumber: 494,
                    columnNumber: 29
                }, this);
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case "Verde":
                return "text-emerald-600";
            case "Amarelo":
                return "text-amber-600";
            case "Vermelho":
                return "text-red-600";
            default:
                return "text-slate-600";
        }
    };
    // Calcular valores para o gráfico
    const maxValue = indicator.historicalData.length > 0 ? Math.max(...indicator.historicalData.map((d)=>Math.max(d.value, d.target)), 0) * 1.1 : 100;
    const chartHeight = 200;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-slate-50 dark:bg-zinc-950 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-white/80 backdrop-blur-md px-8 py-3 dark:bg-zinc-900/80 shadow-sm sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 29
                                    }, this),
                                    "Voltar ao Painel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 520,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                            lineNumber: 519,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-px bg-slate-300"
                        }, void 0, false, {
                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                            lineNumber: 525,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/brasao-cbmal.png",
                                    alt: "Brasão CBMAL",
                                    width: 32,
                                    height: 32,
                                    className: "h-8 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase",
                                    children: [
                                        "CBMAL ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-light text-slate-500 lowercase tracking-normal italic ml-1",
                                            children: "Análise de Indicador"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                            lineNumber: 526,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                    lineNumber: 518,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                lineNumber: 517,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-6 space-y-6 max-w-[1400px] mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-l-4 border-l-red-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-red-700 dark:text-red-500 uppercase tracking-widest",
                                                        children: indicator.oe
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-widest",
                                                        children: indicator.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-2xl font-black text-slate-900 dark:text-white uppercase",
                                                children: indicator.name
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 33
                                            }, this),
                                            indicator.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 dark:text-slate-400",
                                                children: indicator.description
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            "Objetivo: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-700 dark:text-slate-300",
                                                                children: indicator.oeName
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 80
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            "Responsável: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-700 dark:text-slate-300",
                                                                children: indicator.sector
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 83
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right space-y-2",
                                        children: [
                                            getStatusBadge(indicator.status),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 uppercase",
                                                        children: "Realizado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-3xl font-black ${getStatusColor(indicator.status)}`,
                                                        children: indicator.current
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 uppercase",
                                                        children: "Meta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-bold text-slate-600 dark:text-slate-400",
                                                        children: indicator.target
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 557,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 539,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                            lineNumber: 538,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 537,
                        columnNumber: 17
                    }, this),
                    indicator.historicalData && indicator.historicalData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg font-bold",
                                        children: "Evolução Temporal"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Série histórica estimada (Simulação)"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 575,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    style: {
                                        height: chartHeight + 60
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-0 bottom-12 w-12 flex flex-col justify-between text-xs text-slate-500 text-right pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: Math.round(maxValue)
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: Math.round(maxValue * 0.75)
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: Math.round(maxValue * 0.5)
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: Math.round(maxValue * 0.25)
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-12 right-0 top-0 bottom-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 right-0 border-t-2 border-dashed border-slate-400",
                                                    style: {
                                                        bottom: `${indicator.historicalData[0].target / maxValue * chartHeight}px`
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-2 right-0 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 px-2 rounded",
                                                        children: [
                                                            "Meta: ",
                                                            indicator.target
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            fill: "none",
                                                            stroke: "#dc2626",
                                                            strokeWidth: "3",
                                                            points: indicator.historicalData.map((d, i)=>{
                                                                const x = i / (indicator.historicalData.length - 1) * 100;
                                                                const y = 100 - d.value / maxValue * 100;
                                                                return `${x}%,${y}%`;
                                                            }).join(' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 41
                                                        }, this),
                                                        indicator.historicalData.map((d, i)=>{
                                                            const x = i / (indicator.historicalData.length - 1) * 100;
                                                            const y = 100 - d.value / maxValue * 100;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: `${x}%`,
                                                                cy: `${y}%`,
                                                                r: "5",
                                                                fill: "#dc2626",
                                                                stroke: "currentColor",
                                                                className: "text-white dark:text-zinc-900",
                                                                strokeWidth: "2"
                                                            }, i, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 49
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-12 right-0 bottom-0 h-12 flex justify-between items-start pt-2",
                                            children: indicator.historicalData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 -rotate-45 origin-top-left",
                                                    children: d.month
                                                }, i, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 637,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 579,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 574,
                        columnNumber: 21
                    }, this),
                    indicator.historicalData && indicator.historicalData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg font-bold",
                                                    children: "Ficha Técnica"
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 654,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Fórmula:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300 font-mono text-xs",
                                                                children: indicator.formula
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 139
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Unidade:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.unit
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 139
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Polaridade:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.polarity
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 142
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Linha de Base:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.baseline
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 145
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg font-bold",
                                                    children: "Coleta e Responsabilidade"
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 665,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Frequência:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.frequency
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 142
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Fonte de Dados:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.source
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 146
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-semibold",
                                                                children: "Responsável:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: indicator.responsible
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 143
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 668,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 652,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-lg font-bold",
                                            children: "Dados Históricos"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 678,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-slate-100 dark:bg-zinc-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left font-semibold",
                                                                    children: "Período"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right font-semibold",
                                                                    children: "Realizado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                    lineNumber: 686,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right font-semibold",
                                                                    children: "Meta"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right font-semibold",
                                                                    children: "Variação"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                    lineNumber: 688,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-slate-200 dark:divide-zinc-700",
                                                        children: indicator.historicalData.map((d, i)=>{
                                                            const variance = d.value - d.target;
                                                            const variancePercent = d.target !== 0 ? (variance / d.target * 100).toFixed(1) : "0";
                                                            const isGood = indicator.polarity === "Quanto Menor, Melhor" ? variance <= 0 : variance >= 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-slate-50 dark:hover:bg-zinc-800/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2",
                                                                        children: d.month
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 699,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-right font-semibold",
                                                                        children: d.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-right",
                                                                        children: d.target
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `px-4 py-2 text-right font-semibold ${isGood ? 'text-emerald-600' : 'text-red-600'}`,
                                                                        children: [
                                                                            variance > 0 ? '+' : '',
                                                                            variancePercent,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 53
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 676,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center bg-slate-100 rounded-lg text-slate-500",
                        children: "Dados históricos não disponíveis para este indicador."
                    }, void 0, false, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 715,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 border-t px-8 text-center text-[9px] text-slate-400 uppercase tracking-[0.3em] bg-white dark:bg-zinc-950",
                children: "Assessoria de Planejamento e Orçamento | Estado-Major Geral CBMAL"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                lineNumber: 722,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
        lineNumber: 515,
        columnNumber: 9
    }, this);
}
_s(IndicadorDetail, "6tjUaGqXbeKCUQo6mHB9P8cv1X0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = IndicadorDetail;
var _c;
__turbopack_context__.k.register(_c, "IndicadorDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dashboard-cbmal_src_80d40eb6._.js.map