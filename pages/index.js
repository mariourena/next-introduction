import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/prices';

const Index = props => (
    <Layout>
        <h1>Next Introduction</h1>
        <p>Check current bitcoin rate</p>
        <div className="results">
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log(data);
    return { bpi: data.bpi }
};

export default Index;