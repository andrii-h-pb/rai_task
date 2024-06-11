import { FC, PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactQueryPvorider } from 'providers';
import theme from '../theme';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang='en'>
        <body>
            <ReactQueryPvorider>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </ReactQueryPvorider>
        </body>
    </html>
);

export default RootLayout;
