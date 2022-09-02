import React, {FC} from 'react';
import Head from 'next/head';
import Header from "components/Header";

const Home: FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
            </Head>
            <div style={{width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative'}}>
                <Header/>
                {/*一个electron的demo*/}
            </div>
        </React.Fragment>
    );
}

export default Home;
