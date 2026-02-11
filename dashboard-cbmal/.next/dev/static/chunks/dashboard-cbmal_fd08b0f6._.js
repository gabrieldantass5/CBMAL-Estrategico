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
"[project]/dashboard-cbmal/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/select.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, indicatorClassName, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary h-full w-full flex-1 transition-all", indicatorClassName),
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/dashboard-cbmal/src/components/ui/progress.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/progress.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        className: "h-9 w-9 bg-slate-100 dark:bg-zinc-800 border-none relative overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/theme-toggle.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-400"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/theme-toggle.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Alternar tema"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/theme-toggle.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/components/theme-toggle.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(ThemeToggle, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/theme-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: pathname === "/" ? "default" : "ghost",
                    size: "sm",
                    className: pathname === "/" ? "bg-red-700 hover:bg-red-800 text-white" : "",
                    children: "Painel Tático"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/mapa-estrategico",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: pathname === "/mapa-estrategico" ? "default" : "ghost",
                    size: "sm",
                    className: pathname === "/mapa-estrategico" ? "bg-red-700 hover:bg-red-800 text-white" : "",
                    children: "Mapa Estratégico"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-px bg-slate-200 dark:bg-zinc-800 mx-1"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/components/navigation.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(Navigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-xs text-slate-900 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-zinc-800 dark:text-zinc-50 border shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/dashboard-cbmal/src/components/ui/tooltip.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/data/indicadores.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"codigo\":\"IE-11.03\",\"nome\":\"TEMPO MÉDIO DE RESPOSTA DA OUVIDORIA\",\"sigla\":\"TMRO\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio (em dias corridos) entre o recebimento de uma demanda na Ouvidoria e a emissão da primeira resposta ao demandante.\",\"formula\":\"TMRO = Σ(Data Resposta - Data Recebimento) / Total de Demandas Respondidas\",\"unidade\":\"Dias corridos\",\"frequencia\":\"Trimestral\",\"fonte\":\"Sistema de Ouvidoria / Registros Manuais (SEI)\",\"responsavel\":\"Ouvidoria do CBMAL\",\"meta\":\"≤ 15 dias (prazo legal: 30 dias conforme Lei de Acesso à Informação)\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 15 dias 🟡 16 a 30 dias 🔴 > 30 dias\"},{\"codigo\":\"IE-01.01\",\"nome\":\"TAXA DE ATUALIZAÇÃO DE INSTRUÇÕES TÉCNICAS\",\"sigla\":\"TAIT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de Instruções Técnicas (ITs) atualizadas em relação ao total de ITs vigentes.\",\"formula\":\"TAIT = (ITs Atualizadas no Período / Total de ITs Vigentes) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAT / Registro de ITs\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"**≥ 20% do total atualizado**\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 20% 🟡 10% a 19% 🔴 \\\\< 10%\"},{\"codigo\":\"IE-01.02\",\"nome\":\"DEMANDA REPRIMIDA EM VISTORIAS TÉCNICAS\",\"sigla\":\"DRVT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de vistorias técnicas pendentes em relação ao total de pedidos recebidos no período.\",\"formula\":\"DRVT = (Vistorias Pendentes / Pedidos Recebidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"SAPS\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"\\\\< 15%\",\"linha_base\":\"0,27% (36 pendentes / 13.017 pedidos)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 15% 🟡 15% a 30% 🔴 \\\\> 30%\"},{\"codigo\":\"IE-01.03\",\"nome\":\"DEMANDA REPRIMIDA EM ANÁLISES TÉCNICAS\",\"sigla\":\"DRAT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de análises de projetos técnicos pendentes em relação ao total de pedidos recebidos.\",\"formula\":\"DRAT = (Análises Pendentes / Pedidos Recebidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"SAPS\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"\\\\< 15%\",\"linha_base\":\"3,87% (20 pendentes / 516 pedidos)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 15% 🟡 15% a 30% 🔴 \\\\> 30%\"},{\"codigo\":\"IE-01.04\",\"nome\":\"TAXA DE COBERTURA DE PERÍCIAS OBRIGATÓRIAS\",\"sigla\":\"TCPO\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de incêndios com perícia realizada em relação ao total de incêndios que, segundo critérios normativos, exigem investigação pericial obrigatória.\",\"formula\":\"TCPO = (Perícias Realizadas em Ocorrências Obrigatórias / Total de Ocorrências Obrigatórias) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"DAT / SGO (Fênix) + Registro de Perícias\",\"responsavel\":\"DAT - Seção de Perícias\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar (necessário cruzamento: ocorrências x critérios de obrigatoriedade)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 < 50%\"},{\"codigo\":\"IT-01.05\",\"nome\":\"ÍNDICE DE ENTREGA DA DOUTRINA DE PERÍCIA\",\"sigla\":\"\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"\",\"definicao\":\"Mede o progresso físico das etapas de elaboração e publicação do Manual de Perícia e revisão do COSCIE.\",\"formula\":\"% de conclusão das etapas previstas no cronograma do projeto.\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"DAT\",\"meta\":\"100% de conclusão até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-02.01\",\"nome\":\"TEMPO RESPOSTA OPERACIONAL\",\"sigla\":\"TRO\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Tempo médio decorrido entre o acionamento via 193 (horário de despacho) e a chegada da primeira viatura ao local da ocorrência.\",\"formula\":\"TRO = Σ(Hora Chegada - Hora Despacho) / Total de Ocorrências\",\"unidade\":\"Minutos\",\"frequencia\":\"Mensal\",\"fonte\":\"Sistema BM / SGO (Fênix)\",\"responsavel\":\"Diretoria Operacional (DOP) / Seção de Estatística\",\"meta\":\"≤ 12 min\",\"linha_base\":\"15 min e 24 seg (Média 2024\\\\)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 10 min 🟡 10,1 a 12 min 🔴 \\\\> 12 min\"},{\"codigo\":\"IE-02.02\",\"nome\":\"EMERGÊNCIAS NÃO ATENDIDAS\",\"sigla\":\"TENA\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de chamadas de emergência recebidas via 193 que não foram atendidas por falta de recursos operacionais.\",\"formula\":\"TENA = (Emergências Não Atendidas / Total de Emergências Recebidas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Sistema BM / SGO (Fênix)\",\"responsavel\":\"Comando Operacional\",\"meta\":\"\\\\< 2%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 2% 🟡 2% a 5% 🔴 \\\\> 5%\"},{\"codigo\":\"IE-02.03\",\"nome\":\"COBERTURA DE GEORREFERENCIAMENTO\",\"sigla\":\"TCGEO\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de viaturas operacionais equipadas com sistema de georreferenciamento ativo.\",\"formula\":\"TCGEO = (Viaturas com GPS Ativo / Total de Viaturas Operacionais) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Diretoria de Apoio Logístico\",\"responsavel\":\"DAL / Seção de Viaturas\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 50% a 79% 🔴 \\\\< 50%\"},{\"codigo\":\"IT-02.04\",\"nome\":\"IMPLEMENTAÇÃO DO PROJETO DRONES\",\"sigla\":\"\",\"objetivo\":\"OE.02 - Aperfeiçoar a gestão operacional\",\"tema\":\"\",\"definicao\":\"Percentual de conclusão dos marcos: aquisição, capacitação de pilotos e ativação do serviço.\",\"formula\":\"(Marcos Realizados / Marcos Totais) \\\\* 100\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"COB\",\"meta\":\"100% implantado até DEZ/2025\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-03.01\",\"nome\":\"EXECUÇÃO DO PLANO DE EXPANSÃO\",\"sigla\":\"TEPE\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de municípios com unidades operacionais implantadas em relação ao previsto no Plano de Expansão do CBMAL.\",\"formula\":\"TEPE = (Municípios Atendidos / Municípios Previstos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Comando Operacional\",\"responsavel\":\"Comando Operacional\",\"meta\":\"\\\\+2 novos municípios\",\"linha_base\":\"18 municípios (atual)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 Meta atingida 🟡 1 novo município 🔴 Nenhum novo\"},{\"codigo\":\"IE-03.02\",\"nome\":\"NOVOS POSTOS DE GUARDA-VIDAS\",\"sigla\":\"NPGV\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Quantidade de novos postos de guarda-vidas implantados em áreas estratégicas de Alagoas no período.\",\"formula\":\"NPGV = Nº de Postos Implantados no Período\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Comando Operacional / BSA\",\"responsavel\":\"BSA - Batalhão de Salvamento Aquático\",\"meta\":\"≥ 2 novos postos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 1 🔴 Nenhum\"},{\"codigo\":\"IE-03.03\",\"nome\":\"CONVÊNIOS COM MUNICÍPIOS\",\"sigla\":\"NCAM\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Quantidade de convênios ou parcerias formalizados com prefeituras para prestação de serviços de bombeiro militar.\",\"formula\":\"NCAM = Nº de Convênios Ativos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"APO / Seção de Convênios\",\"responsavel\":\"APO\",\"meta\":\"≥ 5 novos convênios\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 5 🟡 3 a 4 🔴 \\\\< 3\"},{\"codigo\":\"IE-04.01\",\"nome\":\"TAXA DE EXECUÇÃO DO PLANO DE GESTÃO\",\"sigla\":\"TEPG\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de iniciativas do Plano de Gestão anual efetivamente concluídas dentro do prazo estipulado.\",\"formula\":\"TEPG = (Iniciativas Concluídas / Iniciativas Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"APO / SGE\",\"responsavel\":\"APO\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-04.02\",\"nome\":\"PLANOS SETORIAIS ENTREGUES\",\"sigla\":\"TPSE\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de Órgãos de Direção Setorial (ODS) que entregaram seus Planos Setoriais completos.\",\"formula\":\"TPSE = (ODS com Plano Entregue / Total de ODS) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual (início do ciclo)\",\"fonte\":\"APO / SEI\",\"responsavel\":\"APO\",\"meta\":\"100%\",\"linha_base\":\"Não havia obrigatoriedade\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 100% 🟡 80% a 99% 🔴 \\\\< 80%\"},{\"codigo\":\"IE-04.03\",\"nome\":\"MATURIDADE EM GESTÃO ESTRATÉGICA\",\"sigla\":\"IMGE\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Avaliação qualitativa do nível de maturidade da gestão estratégica do CBMAL, considerando processos, ferramentas e cultura.\",\"formula\":\"Avaliação baseada em questionário estruturado (escala 1-5)\",\"unidade\":\"Pontuação (1 a 5\\\\)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Autoavaliação\",\"responsavel\":\"APO\",\"meta\":\"Nível 3 (consolidado)\",\"linha_base\":\"Nível 2 (em desenvolvimento)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 3 🟡 2,5 a 2,9 🔴 \\\\< 2,5\"},{\"codigo\":\"IE-05.01\",\"nome\":\"ÍNDICE IMGG\",\"sigla\":\"IMGG\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Pontuação obtida pelo CBMAL no levantamento de governança do TCU/Governo Estadual.\",\"formula\":\"Pontuação conforme metodologia IMGG estadual\",\"unidade\":\"Pontos (0-100)\",\"frequencia\":\"Anual\",\"fonte\":\"SEPLAG / APO\",\"responsavel\":\"APO\",\"meta\":\"≥ 70 pontos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70 🟡 50 a 69 🔴 \\\\< 50\"},{\"codigo\":\"IE-05.02\",\"nome\":\"REUNIÕES DE MONITORAMENTO ESTRATÉGICO\",\"sigla\":\"TRME\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de Reuniões de Monitoramento Estratégico realizadas em relação ao planejado no calendário anual.\",\"formula\":\"TRME = (RMEs Realizadas / RMEs Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Atas de RME\",\"responsavel\":\"APO\",\"meta\":\"100% (4 RMEs)\",\"linha_base\":\"4 reuniões/ano\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 100% 🟡 75% (3 RMEs) 🔴 \\\\< 75%\"},{\"codigo\":\"IE-05.03\",\"nome\":\"INDICADORES COM FAROL VERDE\",\"sigla\":\"TIVD\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de indicadores estratégicos classificados como \\\"Verde\\\" (meta atingida) em relação ao total de indicadores monitorados.\",\"formula\":\"TIVD = (Indicadores Verdes / Total de Indicadores) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"APO / Painel de Farol\",\"responsavel\":\"APO\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 \\\\< 50%\"},{\"codigo\":\"IT-05.04\",\"nome\":\"GRAU DE IMPLANTAÇÃO DA GESTÃO DE RISCOS\",\"sigla\":\"\",\"objetivo\":\"OE.05 - Aprimorar a governança corporativa\",\"tema\":\"\",\"definicao\":\"Verificação de conformidade da entrega da Política de GR e das Matrizes de Risco Setoriais.\",\"formula\":\"Checklist de entregas (Política \\\\+ Matrizes ODS).\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"APO\",\"meta\":\"Política e 100% das matrizes setoriais concluídas até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-06.01\",\"nome\":\"ENGAJAMENTO EM REDES SOCIAIS\",\"sigla\":\"TERS\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Média de interações (curtidas, comentários, compartilhamentos) por publicação nas redes sociais oficiais do CBMAL.\",\"formula\":\"TERS = Σ Interações / Nº de Publicações\",\"unidade\":\"Número médio\",\"frequencia\":\"Mensal\",\"fonte\":\"Redes Sociais da ASCOM / EMG\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"Crescimento de 20% sobre linha de base\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ \\\\+20% 🟡 \\\\+10% a \\\\+19% 🔴 \\\\< \\\\+10%\"},{\"codigo\":\"IE-06.02\",\"nome\":\"SEGUIDORES DO CBMAL\",\"sigla\":\"TSRS\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Soma total de seguidores/assinantes nas redes sociais oficiais do CBMAL (Instagram, YouTube, etc.).\",\"formula\":\"TSRS = Σ Seguidores em todas as redes\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Trimestral\",\"fonte\":\"ASCOM / EMG\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"Crescimento de 15%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ \\\\+15% 🟡 \\\\+5% a \\\\+14% 🔴 \\\\< \\\\+5%\"},{\"codigo\":\"IE-06.03\",\"nome\":\"APRESENTAÇÕES DA BANDA DE MÚSICA\",\"sigla\":\"TEAB\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Percentual de apresentações realizadas em relação às demandas recebidas/planejadas.\",\"formula\":\"TEAB = (Apresentações Realizadas / Demandas Recebidas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Banda de Música / Secretaria-Geral\",\"responsavel\":\"Banda de Música\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-07.01\",\"nome\":\"ALCANCE DE CAMPANHAS PREVENTIVAS\",\"sigla\":\"ACP\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Número estimado de pessoas impactadas pelas campanhas educativas preventivas (presenciais \\\\+ digitais).\",\"formula\":\"ACP = Participantes Presenciais + Alcance Digital\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"ASCOM / Relatórios de Campanhas\",\"responsavel\":\"ASCOM\",\"meta\":\"≥ 50.000 pessoas/ano\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50.000 🟡 30.000 a 49.999 🔴 \\\\< 30.000\"},{\"codigo\":\"IE-07.02\",\"nome\":\"PROJETOS SOCIAIS REALIZADOS\",\"sigla\":\"NTPS\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Quantidade de turmas concluídas dos projetos sociais do CBMAL (Bombeiro Mirim, Golfinho, Surf-Salva).\",\"formula\":\"NTPS = Nº de Turmas Concluídas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"COB / OBMs / ASCOM\",\"responsavel\":\"EMG\",\"meta\":\"≥ 4 turmas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 4 🟡 1 a 3 🔴 \\\\< 1\"},{\"codigo\":\"IE-07.03\",\"nome\":\"ESCOLAS ATENDIDAS\",\"sigla\":\"NEAP\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Quantidade de escolas (públicas e privadas) que receberam ações educativas do CBMAL no período.\",\"formula\":\"NEAP = Nº de Escolas Atendidas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"OBMs / Relatórios de Palestras\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"≥ 50 escolas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50 🟡 25 a 49 🔴 \\\\< 25\"},{\"codigo\":\"IE-08.01\",\"nome\":\"IMPLANTAÇÃO DA GESTÃO POR COMPETÊNCIAS\",\"sigla\":\"TIGC\",\"objetivo\":\"OE.08 - Otimizar a gestão de pessoas\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de etapas da Política de Gestão por Competências efetivamente implementadas.\",\"formula\":\"TIGC = (Etapas Implementadas / Total de Etapas Previstas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 50%\",\"linha_base\":\"20% (fase inicial)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50% 🟡 30% a 49% 🔴 \\\\< 30%\"},{\"codigo\":\"IE-08.02\",\"nome\":\"BANCO DE TALENTOS ATIVO\",\"sigla\":\"TMBT\",\"objetivo\":\"OE.08 - Otimizar a gestão de pessoas\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares com perfil de competências cadastrado no Banco de Talentos.\",\"formula\":\"TMBT = (Militares Cadastrados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Sistema BMRH / Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 30%\",\"linha_base\":\"0% (não implantado)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 30% 🟡 15% a 29% 🔴 \\\\< 15%\"},{\"codigo\":\"IE-09.01\",\"nome\":\"ÍNDICE DE CLIMA ORGANIZACIONAL\",\"sigla\":\"ISCO\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Pontuação média obtida em pesquisa de clima organizacional aplicada ao efetivo.\",\"formula\":\"Média das respostas em escala de 1 a 5\",\"unidade\":\"Pontuação (1 a 5\\\\)\",\"frequencia\":\"Anual\",\"fonte\":\"Pesquisa de Clima / Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 4,0\",\"linha_base\":\"3,86 (Relatório 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 4,0 🟡 3,5 a 3,9 🔴 \\\\< 3,5\"},{\"codigo\":\"IE-09.02\",\"nome\":\"RECONHECIMENTOS POR MÉRITO\",\"sigla\":\"NRFM\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Quantidade de medalhas, elogios e prêmios concedidos por desempenho destacado no período.\",\"formula\":\"NRFM = Nº de Reconhecimentos Publicados em BGO\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Secretaria Geral / BGO\",\"responsavel\":\"Secretaria Geral / EMG\",\"meta\":\"≥ 50 reconhecimentos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50 🟡 25 a 49 🔴 \\\\< 25\"},{\"codigo\":\"IT-09.03\",\"nome\":\"TAXA DE COBERTURA DE SUPORTE EMOCIONAL\",\"sigla\":\"\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"\",\"definicao\":\"Percentual de unidades (OBMs) que receberam a visita técnica ou capacitação do programa de suporte mental.\",\"formula\":\"(OBMs Atendidas / Total de OBMs) \\\\* 100\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"NSQVT\",\"meta\":\"100% das OBMs atendidas até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-09.04\",\"nome\":\"TEMPO MÉDIO DE ATENDIMENTO DA ASSISTÊNCIA SOCIAL\",\"sigla\":\"TMAS\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio (em dias corridos) entre a solicitação de um atendimento de assistência social (DS) e a realização do primeiro atendimento ao militar ou familiar.\",\"formula\":\"TMAS = Σ(Data Primeiro Atendimento - Data Solicitação) / Total de Solicitações Atendidas\",\"unidade\":\"Dias corridos\",\"frequencia\":\"Trimestral\",\"fonte\":\"DS - Registros de Atendimento (planilha/sistema)\",\"responsavel\":\"Diretoria de Saúde (DS)\",\"meta\":\"≤ 7 dias\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 7 dias 🟡 8 a 15 dias 🔴 > 15 dias\"},{\"codigo\":\"IE-10.01\",\"nome\":\"TAXA DE APTIDÃO FÍSICA (TAF)\",\"sigla\":\"TTAF\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares considerados aptos no Teste de Aptidão Física (TAF) periódico.\",\"formula\":\"TTAF = (Militares Aptos / Militares Avaliados) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"CTFID\",\"responsavel\":\"CTFID\",\"meta\":\"≥ 85%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 85% 🟡 70% a 84% 🔴 \\\\< 70%\"},{\"codigo\":\"IE-10.02\",\"nome\":\"MILITARES EM INSPEÇÃO DE SAÚDE\",\"sigla\":\"TSIS\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares que realizaram inspeção de saúde periódica obrigatória.\",\"formula\":\"TSIS = (Militares Inspecionados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Saúde\",\"responsavel\":\"Diretoria de Saúde\",\"meta\":\"≥ 90%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 75% a 89% 🔴 \\\\<75%\"},{\"codigo\":\"IE-10.03\",\"nome\":\"AFASTAMENTOS POR MOTIVO DE SAÚDE\",\"sigla\":\"TAMS\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual do efetivo afastado do serviço por licença médica no período.\",\"formula\":\"TAMS = (Militares Afastados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Diretoria de Saúde / BMRH\",\"responsavel\":\"Diretoria de Saúde\",\"meta\":\"\\\\< 10%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 10% 🟡 10% a 15% 🔴 \\\\> 15%\"},{\"codigo\":\"IE-11.01\",\"nome\":\"PRAZO MÉDIO DE PROCESSOS DISCIPLINARES\",\"sigla\":\"PMPD\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio decorrido entre a instauração e a conclusão de processos administrativos disciplinares.\",\"formula\":\"PMPD = Σ(Data Conclusão - Data Instauração) / Nº de Processos\",\"unidade\":\"Dias\",\"frequencia\":\"Semestral\",\"fonte\":\"Corregedoria Geral\",\"responsavel\":\"Corregedoria Geral\",\"meta\":\"≤ 90 dias\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 90 dias 🟡 91 a 120 dias 🔴 \\\\> 120 dias\"},{\"codigo\":\"IE-11.02\",\"nome\":\"DEMANDAS DE OUVIDORIA ATENDIDAS\",\"sigla\":\"TADO\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de demandas de ouvidoria respondidas dentro do prazo legal.\",\"formula\":\"TADO = (Demandas Respondidas no Prazo / Total de Demandas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Ouvidoria / Sistema de Ouvidoria\",\"responsavel\":\"Ouvidoria\",\"meta\":\"≥ 95%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 95% 🟡 85% a 94% 🔴 \\\\< 85%\"},{\"codigo\":\"IE-12.01\",\"nome\":\"EXECUÇÃO DO PACC\",\"sigla\":\"TEPACC\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de cursos realizados em relação ao previsto no PACC do exercício.\",\"formula\":\"TEPACC = (Cursos Realizados / Cursos Planejados) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-12.02\",\"nome\":\"TAXA DE CAPACITAÇÃO CONTINUADA\",\"sigla\":\"TCCE\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de militares que participaram de pelo menos uma ação de capacitação no período.\",\"formula\":\"TCCE = (Militares Capacitados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 80%\",\"linha_base\":\"76,81% (S1 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 60% 🟡 40% a 59% 🔴 \\\\< 40%\"},{\"codigo\":\"IE-12.03\",\"nome\":\"ADESÃO A CURSOS\",\"sigla\":\"TAOC\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de vagas preenchidas em relação às vagas ofertadas nos cursos do CBMAL.\",\"formula\":\"TAOC = (Vagas Preenchidas / Vagas Ofertadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 90%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 70% a 89% 🔴 \\\\< 70%\"},{\"codigo\":\"IE-13.01\",\"nome\":\"PRODUÇÃO TÉCNICO-CIENTÍFICA\",\"sigla\":\"NPTC\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de artigos, manuais, POPs e trabalhos acadêmicos produzidos por militares do CBMAL.\",\"formula\":\"NPTC = Nº de Produções Publicadas/Registradas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino / CTEPs\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 15 produções\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 15 🟡 8 a 14 🔴 \\\\< 8\"},{\"codigo\":\"IE-13.02\",\"nome\":\"CONVÊNIOS ACADÊMICOS\",\"sigla\":\"NCAA\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de convênios ou parcerias formalizados com instituições de ensino superior e pesquisa.\",\"formula\":\"NCAA = Nº de Convênios Ativos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino / APO\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 2 convênios\",\"linha_base\":\"2 (UFAL, UNEAL)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 1 🔴 \\\\< 0\"},{\"codigo\":\"IE-13.03\",\"nome\":\"LIÇÕES APRENDIDAS REGISTRADAS\",\"sigla\":\"NLAR\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de registros formais de lições aprendidas em operações ou projetos.\",\"formula\":\"NLAR = Nº de Registros no Período\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"APO / Escritório de Projetos\",\"responsavel\":\"APO\",\"meta\":\"≥ 10 registros\",\"linha_base\":\"0 (não havia sistemática)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 10 🟡 5 a 9 🔴 \\\\< 5\"},{\"codigo\":\"IE-14.01\",\"nome\":\"SISTEMAS DESENVOLVIDOS/INTEGRADOS\",\"sigla\":\"NSDI\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Quantidade de novos sistemas implementados ou integrações entre sistemas existentes realizadas no período.\",\"formula\":\"NSDI = Nº de Sistemas/Integrações Entregues\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"DTI\",\"responsavel\":\"DTI\",\"meta\":\"≥ 2 entregas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 \\\\= 1 🔴\\\\= 0\"},{\"codigo\":\"IE-14.02\",\"nome\":\"DISPONIBILIDADE DE PORTAIS\",\"sigla\":\"TDPW\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Percentual de tempo em que os portais institucionais (Site, Intranet, SAPS) estiveram disponíveis sem interrupção.\",\"formula\":\"TDPW = (Tempo Disponível / Tempo Total) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"DTI\",\"responsavel\":\"DTI\",\"meta\":\"≥ 95%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 95% 🟡 90% a 94.9% 🔴 < 90%\"},{\"codigo\":\"IE-14.03\",\"nome\":\"SOLUÇÕES DE BI IMPLEMENTADAS\",\"sigla\":\"NSBI\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Quantidade de dashboards ou painéis de BI disponibilizados para apoio à decisão.\",\"formula\":\"NSBI = Nº de Dashboards/Painéis Entregues\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de TIC / APO\",\"responsavel\":\"APO\",\"meta\":\"≥ 3 painéis\",\"linha_base\":\"1 (Painel de Monitoramento)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 3 🟡 2 🔴 \\\\< 2\"},{\"codigo\":\"IE-15.01\",\"nome\":\"DISPONIBILIDADE DA FROTA OPERACIONAL\",\"sigla\":\"TDFO\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de viaturas operacionais em condições de uso (excluídas as em manutenção preventiva/corretiva).\",\"formula\":\"TDFO = (Viaturas Disponíveis / Total de Viaturas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Diretoria de Apoio Logístico\",\"responsavel\":\"DAL\",\"meta\":\"≥ 85%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 85% 🟡 70% a 84%🔴 \\\\< 70%\"},{\"codigo\":\"IE-15.02\",\"nome\":\"EXECUÇÃO DO PLANO DE OBRAS\",\"sigla\":\"TEPO\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de obras de construção/reforma concluídas em relação ao planejado.\",\"formula\":\"TEPO = (Obras Concluídas / Obras Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAL / COMP\",\"responsavel\":\"DAL\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 \\\\< 50%\"},{\"codigo\":\"IE-15.03\",\"nome\":\"APARELHAMENTO FINALÍSTICO\",\"sigla\":\"TAAF\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de equipamentos operacionais críticos (EPIs, equipamentos de resgate, combate a incêndio) em conformidade com padrões mínimos.\",\"formula\":\"TAAF = (Equipamentos Conformes / Total de Equipamentos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAL / Almoxarifado Central e OBMs\",\"responsavel\":\"DAL\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79%🔴 \\\\< 60%\"},{\"codigo\":\"IT-15.04\",\"nome\":\"PROGRESSO DO PLANO DIRETOR DE LOGÍSTICA\",\"sigla\":\"\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"\",\"definicao\":\"Monitoramento das fases de diagnóstico, redação e aprovação do Plano Diretor de Logística.\",\"formula\":\"% de avanço do cronograma do projeto.\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"DAL\",\"meta\":\"Publicação do PDLP até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-16.01\",\"nome\":\"ADIMPLÊNCIA DA TAXA DE BOMBEIROS\",\"sigla\":\"TATB\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Percentual de contribuintes da Taxa de Bombeiros que efetuaram pagamento dentro do prazo.\",\"formula\":\"TATB = (Pagamentos Recebidos / Lançamentos Emitidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de Arrecadação\",\"responsavel\":\"Seção de Arrecadação\",\"meta\":\"≥ 75%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 75% 🟡 60% a 74% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-16.02\",\"nome\":\"RECURSOS DE EMENDAS CAPTADOS\",\"sigla\":\"VREP\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Valor total de recursos captados por meio de emendas parlamentares no exercício.\",\"formula\":\"VREP = Σ Valores de Emendas Recebidas\",\"unidade\":\"Reais (R$)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Assessoria Parlamentar\",\"responsavel\":\"APO\",\"meta\":\"≥ R$ 5.000.000,00\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ R$ 5 mi 🟡 R$ 2 a 5 mi 🔴 \\\\< R$ 2 mi\"},{\"codigo\":\"IE-16.03\",\"nome\":\"NOVOS MUNICÍPIOS TRIBUTADOS\",\"sigla\":\"NMCT\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Quantidade de municípios alagoanos incluídos na base de cobrança da Taxa de Bombeiros no período.\",\"formula\":\"NMCT = Nº de Novos Municípios Incluídos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de Arrecadação\",\"responsavel\":\"Seção de Arrecadação\",\"meta\":\"≥ 2 novos municípios\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 \\\\= 1 🔴 \\\\= 0\"},{\"codigo\":\"IE-17.01\",\"nome\":\"EXECUÇÃO FINANCEIRA-ORÇAMENTÁRIA\",\"sigla\":\"TEFO\",\"objetivo\":\"OE.17 - Aprimorar execução orçamentária\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Percentual do orçamento aprovado efetivamente executado (empenhado e liquidado) no exercício.\",\"formula\":\"TEFO = (Despesas Executadas / Orçamento Aprovado) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"SEFAZ / Sistema Orçamentário\",\"responsavel\":\"Seção de Orçamento e Finanças\",\"meta\":\"≥ 90%\",\"linha_base\":\"86,35% (SIAFE 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 80% a 89% 🔴 \\\\< 80%\"},{\"codigo\":\"IE-17.02\",\"nome\":\"INSCRIÇÃO EM RESTOS A PAGAR\",\"sigla\":\"\\\\[Sigla do indicador\\\\]\",\"objetivo\":\"\\\\[Vincular a um dos 17 Objetivos Estratégicos\\\\]\",\"tema\":\"\\\\[Vincular a um dos 8 Temas Estratégicos\\\\]\",\"definicao\":\"\\\\[Explicação detalhada sobre o que o indicador mede\\\\]\",\"formula\":\"\\\\[Expressão matemática para obtenção do resultado\\\\]\",\"unidade\":\"\\\\[Percentual (%), Número absoluto, Reais (R$), Dias, etc.\\\\]\",\"frequencia\":\"\\\\[Mensal, Trimestral, Semestral ou Anual\\\\]\",\"fonte\":\"\\\\[Sistema, planilha ou documento de onde o dado será extraído\\\\]\",\"responsavel\":\"\\\\[Setor ou Seção responsável por coletar e reportar o dado\\\\]\",\"meta\":\"\\\\[Valor numérico ou percentual definido como objetivo para 2025\\\\]\",\"linha_base\":\"\\\\[Valor registrado no ano de 2024 ou \\\"A levantar\\\"\\\\]\",\"polaridade\":\"\\\\[Quanto Maior Melhor / Quanto Menor Melhor\\\\]\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\[Critério Verde\\\\] 🟡 \\\\[Critério Amarelo\\\\] 🔴 \\\\[Critério Vermelho\\\\]\"}]"));}),
"[project]/dashboard-cbmal/src/lib/indicators-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardData",
    ()=>getDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$data$2f$indicadores$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/data/indicadores.json (json)");
;
// Helper to extract sector acronym from 'responsavel'
function getSectorFromResponsavel(responsavel) {
    if (!responsavel) return 'CBMAL';
    // Common acronyms mapping
    const map = {
        'Diretoria de Atividades Técnicas': 'DAT',
        'Comando Operacional': 'COB',
        'Diretoria de Apoio Logístico': 'DAL',
        'Diretoria de Pessoal': 'DP',
        'Diretoria de Saúde': 'DS',
        'Diretoria de Ensino': 'DE',
        'Assessoria de Planejamento': 'APO',
        'Secretaria Geral': 'SG',
        'Corregedoria': 'CORREG',
        'Ouvidoria': 'OUV',
        'Banda de Música': 'BM',
        'ASCOM': 'ASCOM',
        'CTFID': 'CTFID',
        'DTI': 'DTI',
        'BSA': 'BSA'
    };
    // Try to find exact match or substring
    for (const [key, val] of Object.entries(map)){
        if (responsavel.includes(key) || responsavel.includes(val)) return val;
    }
    // Fallback: take the first word if it looks like an acronym (uppercase), or just the first part
    const firstWord = responsavel.split(' ')[0].replace(/[^a-zA-Z]/g, '');
    return firstWord.length <= 6 ? firstWord.toUpperCase() : 'OUTROS';
}
function evaluateRule(value, rule) {
    const cleanRule = rule.trim().toLowerCase();
    // 1. Caso de faixa: "10 a 20" ou "10% a 20%"
    if (cleanRule.includes(' a ')) {
        const numbers = cleanRule.match(/(\d+(?:[.,]\d+)?)/g);
        if (numbers && numbers.length >= 2) {
            const min = parseFloat(numbers[0].replace(',', '.'));
            const max = parseFloat(numbers[1].replace(',', '.'));
            return value >= min && value <= max;
        }
    }
    // 2. Extrair o número alvo da regra
    const numMatch = cleanRule.match(/(\d+(?:[.,]\d+)?)/);
    if (!numMatch) return false;
    const target = parseFloat(numMatch[0].replace(',', '.'));
    // 3. Avaliar baseados nos operadores comuns do catálogo
    if (cleanRule.includes('≤') || cleanRule.includes('<=') || cleanRule.includes('até')) {
        return value <= target;
    }
    if (cleanRule.includes('≥') || cleanRule.includes('>=') || cleanRule.includes('mínimo')) {
        return value >= target;
    }
    if (cleanRule.includes('<') || cleanRule.includes('menor')) {
        return value < target;
    }
    if (cleanRule.includes('>') || cleanRule.includes('maior')) {
        return value > target;
    }
    // Fallback para igualdade simples
    return value === target;
}
function calculateStatus(value, farolString) {
    if (value === "---" || value === "" || value === undefined) return "neutro";
    let numValue;
    if (typeof value === 'string') {
        // Limpar strings como "15 min" ou "80%"
        const cleaned = value.replace(/[^\d,.-]/g, '').replace(',', '.');
        numValue = parseFloat(cleaned);
    } else {
        numValue = value;
    }
    if (isNaN(numValue)) return "neutro";
    if (!farolString) return "neutro";
    // Divide a string do farol pelos emojis 🟢 🟡 🔴
    const parts = farolString.split(/(🟢|🟡|🔴)/).filter((p)=>p.trim().length > 0);
    let lastEmoji = "";
    for (const part of parts){
        if ([
            '🟢',
            '🟡',
            '🔴'
        ].includes(part)) {
            lastEmoji = part;
            continue;
        }
        if (lastEmoji && evaluateRule(numValue, part)) {
            if (lastEmoji === '🟢') return 'verde';
            if (lastEmoji === '🟡') return 'amarelo';
            if (lastEmoji === '🔴') return 'vermelho';
        }
    }
    return "neutro";
}
async function getDashboardData() {
    const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$data$2f$indicadores$2e$json__$28$json$29$__["default"];
    // 1. Carregar dados básicos do JSON
    const indicators = rawData.map((item)=>{
        const status = 'neutro'; // Padrão antes de cruzar com dados reais
        const oeMatch = item.objetivo.match(/(OE\.\d+)/);
        const oeCode = oeMatch ? oeMatch[1] : item.objetivo;
        return {
            ...item,
            id: item.codigo,
            currentValue: "---",
            status: status,
            trend: [
                50,
                50,
                50
            ],
            trendDirection: 'neutral',
            sector: getSectorFromResponsavel(item.responsavel),
            objetivo: oeCode
        };
    });
    // 2. Tentar buscar dados reais da API (opcional)
    try {
        const response = await fetch('/api/indicators/data');
        if (response.ok) {
            const realData = await response.json();
            // Cruzar dados
            return indicators.map((ind)=>{
                // Encontrar o lançamento mais recente para este código que tenha valor
                const entries = realData.filter((r)=>r['CÓDIGO'] === ind.codigo);
                if (entries.length > 0) {
                    // Ordenar por período descendente (mais recente primeiro)
                    const latestEntry = entries.sort((a, b)=>(b['PERÍODO (YYYY-MM)'] || '').localeCompare(a['PERÍODO (YYYY-MM)'] || ''))[0];
                    const valueRaw = latestEntry['VALOR_REALIZADO'];
                    const hasValue = valueRaw !== undefined && valueRaw !== null && valueRaw !== '';
                    // Lógica de status automática baseada no catálogo
                    const status = calculateStatus(valueRaw, ind.farol_completo || '');
                    return {
                        ...ind,
                        currentValue: hasValue ? valueRaw : "---",
                        status: status,
                        trendDirection: status === 'verde' ? 'up' : status === 'vermelho' ? 'down' : 'neutral'
                    };
                }
                return ind;
            });
        }
    } catch (e) {
        console.warn("API de dados não disponível, usando apenas metadados.");
    }
    return indicators;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard-cbmal/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$indicators$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/indicators-service.ts [app-client] (ecmascript)");
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
;
;
;
;
;
// Helper for title casing
const toTitleCase = (str)=>{
    return str.replace(/\w\S*/g, (text)=>text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
};
// Dados extraídos e estruturados DINAMICAMENTE
// const allIndicators = getDashboardData(); // Load on init
const sectors = [
    {
        id: "all",
        name: "Todas as Diretorias"
    },
    {
        id: "APO",
        name: "APO - Planejamento"
    },
    {
        id: "ASCOM",
        name: "ASCOM - Comunicação"
    },
    {
        id: "BSA",
        name: "BSA - Salvamento"
    },
    {
        id: "COB",
        name: "COB - Comando Operacional"
    },
    {
        id: "CORREG",
        name: "CORREG - Corregedoria"
    },
    {
        id: "CTFID",
        name: "CTFID - Física"
    },
    {
        id: "DAL",
        name: "DAL - Logística"
    },
    {
        id: "DAT",
        name: "DAT - Ativ. Técnicas"
    },
    {
        id: "DE",
        name: "DE - Ensino"
    },
    {
        id: "DP",
        name: "DP - Pessoal"
    },
    {
        id: "DS",
        name: "DS - Saúde"
    },
    {
        id: "DTI",
        name: "DTI - Tecnologia"
    },
    {
        id: "NSQVT",
        name: "NSQVT - Quali. Vida"
    },
    {
        id: "SG",
        name: "SG - Secretaria Geral"
    },
    {
        id: "OUV",
        name: "OUV - Ouvidoria"
    }
];
const OEs = [
    {
        id: "all",
        name: "Todos os Objetivos"
    },
    {
        id: "OE.01",
        name: "OE.01 - Prev. Incêndio"
    },
    {
        id: "OE.02",
        name: "OE.02 - Gestão Operacional"
    },
    {
        id: "OE.03",
        name: "OE.03 - Expansão"
    },
    {
        id: "OE.04",
        name: "OE.04 - Gestão Estratégica"
    },
    {
        id: "OE.05",
        name: "OE.05 - Governança"
    },
    {
        id: "OE.06",
        name: "OE.06 - Comunicação"
    },
    {
        id: "OE.07",
        name: "OE.07 - Educação Pública"
    },
    {
        id: "OE.08",
        name: "OE.08 - Gestão Pessoas"
    },
    {
        id: "OE.09",
        name: "OE.09 - Valorização Prof."
    },
    {
        id: "OE.10",
        name: "OE.10 - Saúde e TAF"
    },
    {
        id: "OE.11",
        name: "OE.11 - Correição/Ouv."
    },
    {
        id: "OE.12",
        name: "OE.12 - Educação Corp."
    },
    {
        id: "OE.13",
        name: "OE.13 - Gestão Conhec."
    },
    {
        id: "OE.14",
        name: "OE.14 - Transf. Digital"
    },
    {
        id: "OE.15",
        name: "OE.15 - Infraestrutura"
    },
    {
        id: "OE.16",
        name: "OE.16 - Arrecadação"
    },
    {
        id: "OE.17",
        name: "OE.17 - Finanças"
    }
];
function Home() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sectorFilter, setSectorFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [indicators, setIndicators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const loadData = {
                "Home.useEffect.loadData": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$indicators$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardData"])();
                    setIndicators(data);
                }
            }["Home.useEffect.loadData"];
            loadData();
        }
    }["Home.useEffect"], []);
    const filteredIndicators = indicators.filter((ind)=>{
        const matchesOE = filter === "all" || ind.objetivo.includes(filter); // Use includes for OE code
        const matchesStatus = statusFilter === "all" || ind.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesSector = sectorFilter === "all" || ind.sector === sectorFilter;
        return matchesOE && matchesStatus && matchesSector;
    });
    const getStatusBadge = (status)=>{
        switch(status.toLowerCase()){
            case "verde":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-emerald-500 hover:bg-emerald-600 border-none shrink-0 shadow-sm text-[10px] uppercase",
                    children: "Conforme"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                    lineNumber: 91,
                    columnNumber: 28
                }, this);
            case "amarelo":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-amber-500 hover:bg-amber-600 border-none shrink-0 text-zinc-900 text-[10px] uppercase",
                    children: "Atenção"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 30
                }, this);
            case "vermelho":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-600 hover:bg-red-700 border-none shrink-0 shadow-sm text-[10px] uppercase",
                    children: "Crítico"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                    lineNumber: 93,
                    columnNumber: 31
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-slate-500 border-none shrink-0 text-[10px] uppercase",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                    lineNumber: 94,
                    columnNumber: 23
                }, this);
        }
    };
    const getStatusBorder = (status)=>{
        switch(status.toLowerCase()){
            case "verde":
                return "border-l-4 border-l-emerald-500";
            case "amarelo":
                return "border-l-4 border-l-amber-500";
            case "vermelho":
                return "border-l-4 border-l-red-600";
            default:
                return "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-slate-50 dark:bg-zinc-950 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-white/80 backdrop-blur-md px-8 py-3 dark:bg-zinc-900/80 flex justify-between items-center shadow-sm sticky top-0 z-50",
                children: [
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
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase",
                                children: [
                                    "CBMAL ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-light text-slate-500 lowercase tracking-normal italic ml-1",
                                        children: "Painel Tático v2.2"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-px bg-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                onValueChange: setSectorFilter,
                                defaultValue: "all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[180px] h-9 bg-slate-100 dark:bg-zinc-800 border-none font-semibold text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Filtrar por Diretoria"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: sectors.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: sec.id,
                                                className: "text-xs",
                                                children: sec.name
                                            }, sec.id, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                onValueChange: setStatusFilter,
                                defaultValue: "all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[150px] h-9 bg-slate-100 dark:bg-zinc-800 border-none font-semibold text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Status do Farol"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "all",
                                                className: "text-xs font-bold text-slate-500",
                                                children: "Todos os Status"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "verde",
                                                className: "text-xs font-bold text-emerald-600",
                                                children: "🟢 Conforme"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "amarelo",
                                                className: "text-xs font-bold text-amber-500",
                                                children: "🟡 Atenção"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "vermelho",
                                                className: "text-xs font-bold text-red-600",
                                                children: "🔴 Crítico"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                onValueChange: setFilter,
                                defaultValue: "all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[200px] h-9 bg-slate-100 dark:bg-zinc-800 border-none font-semibold text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Filtrar por Objetivo"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: OEs.map((oe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: oe.id,
                                                className: "text-xs",
                                                children: oe.name
                                            }, oe.id, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-cbmal-red hover:bg-red-800 text-white h-9 px-4 text-xs font-bold uppercase transition-all shadow-md",
                                size: "sm",
                                children: "Relatório APO"
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-6 space-y-6 max-w-[1400px] mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-black text-slate-400 uppercase tracking-[0.2em]",
                                        children: "Visão Corrente"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 font-medium italic",
                                        children: "Dados extraídos do Caderno de Indicadores Estratégicos v2.2"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-black text-slate-800 dark:text-white tracking-tighter",
                                                children: filteredIndicators.length
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400 font-bold uppercase",
                                                children: "Indicadores Exibidos"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/data",
                                        className: "flex flex-col items-end cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-black text-slate-400 dark:text-slate-600 group-hover:text-cbmal-blue transition-colors",
                                                children: "CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400 font-bold uppercase",
                                                children: "Importar Dados"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                        children: filteredIndicators.map((ind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/indicador/${ind.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: `group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-zinc-900 flex flex-col cursor-pointer ${getStatusBorder(ind.status)} h-full`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "p-4 space-y-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start text-left gap-2 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute right-0 top-0 cursor-help p-1 bg-slate-50 dark:bg-zinc-800 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                            className: "h-3 w-3 text-slate-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                                    className: "max-w-[280px] p-3 shadow-xl border-slate-200 dark:border-zinc-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 pb-1 border-b border-slate-100 dark:border-zinc-700",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-black text-cbmal-red",
                                                                                        children: ind.id
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                        lineNumber: 197,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-tighter",
                                                                                        children: "Ficha Técnica"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                        lineNumber: 198,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] leading-relaxed text-slate-600 dark:text-zinc-300 font-medium",
                                                                                children: ind.definicao
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between pt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[9px] font-bold uppercase text-slate-400",
                                                                                        children: "Responsável:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: "text-[9px] py-0 h-4 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border-none truncate max-w-[150px]",
                                                                                        children: ind.responsavel
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                        lineNumber: 205,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 w-full mt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-cbmal-red uppercase tracking-widest",
                                                                        children: ind.objetivo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-medium text-slate-400",
                                                                        children: "|"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest",
                                                                        children: ind.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "text-sm font-bold leading-snug text-slate-800 dark:text-slate-100 uppercase group-hover:text-cbmal-red transition-colors pt-1 min-h-[40px] line-clamp-2",
                                                                title: ind.nome,
                                                                children: toTitleCase(ind.nome)
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 pt-0 mt-auto space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-4 w-0.5 bg-slate-200 dark:bg-zinc-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-semibold text-slate-500 uppercase",
                                                                    children: ind.sector
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-end shrink-0",
                                                            children: getStatusBadge(ind.status)
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4 border-t pt-4 border-slate-100 dark:border-zinc-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-semibold text-slate-400 uppercase",
                                                                    children: "Realizado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl font-bold text-slate-900 dark:text-white",
                                                                    children: ind.currentValue
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0.5 text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-semibold text-slate-400 uppercase",
                                                                    children: "Meta"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium text-slate-500 truncate max-w-[80px]",
                                                                    title: ind.meta,
                                                                    children: ind.meta
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-[10px] font-semibold text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Tendência"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: ind.status === 'verde' ? '▲' : ind.status === 'vermelho' ? '▼' : '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                            value: ind.status === 'verde' ? 100 : ind.status === 'amarelo' ? 80 : 45,
                                                            indicatorClassName: ind.status === 'verde' ? 'bg-emerald-500' : ind.status === 'amarelo' ? 'bg-amber-500' : 'bg-red-600',
                                                            className: "h-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, ind.id, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    filteredIndicators.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-20 text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm font-bold uppercase tracking-widest",
                                children: "Nenhum dado encontrado para este filtro"
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 border-t px-8 text-center text-[9px] text-slate-400 uppercase tracking-[0.3em] bg-white dark:bg-zinc-950",
                children: "Assessoria de Planejamento e Orçamento | Estado-Major Geral CBMAL"
            }, void 0, false, {
                fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/app/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(Home, "vyfc1VPWBI7ivfrt9IJwsWbbKsE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dashboard-cbmal_fd08b0f6._.js.map