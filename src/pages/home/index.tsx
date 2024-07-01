import { GetStaticProps, NextPage } from 'next';
import { HomeTemplate } from '../../templates/Home';

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}, 
    };
};

const Home: NextPage = () => {
    return (
        <>
            <HomeTemplate />
        </>
    );
};

export default Home;
