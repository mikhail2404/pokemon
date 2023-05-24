import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper} from "@/store/store";
import Layout from "@/layouts/Layout";
import {Provider} from "react-redux";
import {StyledEngineProvider} from "@mui/material";

const App = ({Component, ...rest}: Omit<AppProps, 'pageProps'>) => {
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <Layout>
                    <Component {...props.pageProps} />
                </Layout>
            </StyledEngineProvider>
        </Provider>
    );
};

export default App;
