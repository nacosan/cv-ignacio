import { GetStaticProps, NextPage } from 'next';
import Home from './home';

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

const Index: NextPage = () => {
    return (
        <>
            <Home />
        </>
    );
};

export default Index;
