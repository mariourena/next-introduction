import Head from 'next/head';
import Nav from './nav';

const Layout = props => (
    <section className="page container">
        <Head>
            <title>Introduction to Next.js</title>
            <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
        <Nav />
        {props.children}
    </section>
);

export default Layout;