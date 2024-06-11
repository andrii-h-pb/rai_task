'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const queryClientOptions = {
    defaultOptions: {
        queries: {
            staleTime: 60000,
        },
    },
};

const queryClient = new QueryClient(queryClientOptions);

export const ReactQueryPvorider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
