import Layout from '../../components/layout';
import { useRouter } from 'next/router';

const Event = (): JSX.Element => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <h1>{slug}</h1>
            <div>
                Welcome to the events
        </div>
        </Layout>
    );
};

export default Event;
