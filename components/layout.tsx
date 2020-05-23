import Head from 'next/head';
import Nav from './nav';
import { FunctionComponent } from 'react';

const Layout: FunctionComponent<{ children: JSX.Element[] }> = ({ children }): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
