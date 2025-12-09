"use client";

import React, { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Toaster } from 'sonner';


export default function ClientProvider({
    children
}: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null


    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
                <TanStackDevtools />
            </QueryClientProvider>

            <Toaster
                position="top-center"
                mobileOffset={{ bottom: '16px' }}
                richColors={true}
                swipeDirections={['left', 'right', 'top', 'bottom']}
            />

        </>

    );
}