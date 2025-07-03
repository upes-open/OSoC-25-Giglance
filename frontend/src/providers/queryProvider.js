"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = Providers;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
function Providers({ children }) {
    // Create a new QueryClient instance for each session
    const [queryClient] = (0, react_1.useState)(() => new react_query_1.QueryClient());
    return (<react_query_1.QueryClientProvider client={queryClient}>
      {children}
    </react_query_1.QueryClientProvider>);
}
