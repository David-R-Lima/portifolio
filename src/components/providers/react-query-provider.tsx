'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export function ReactQueryProvider({children}: {
    children: React.ReactNode,  // The component children to render
}){
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}