import Chart from "react-google-charts";
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const PublisherPieChart = () => {
    const [publicationData, setPublicationData] = useState([['publication', 'percentage']]);
    const axiosPublic = useAxiosPublic();
    const {data: publisherPercentages = [], isError, error } = useQuery({
        // enabled: !!role,
        queryKey: ['publisherPercentages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/publisher/percentages');
            return res.data;
        },
    });

    useEffect(() => {
        if (publisherPercentages.length > 0) {
            const formattedData = publisherPercentages.map(({ publication, percentage }) => [publication, parseInt(percentage)]);
            setPublicationData([['publication', 'percentage'], ...formattedData]);
        }
    }, [publisherPercentages]);

    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className='mx-auto w-full h-auto text-center'>
            {publicationData.length > 1 && (
                <Chart
                    chartType="PieChart"
                    width={'100%'}
                    height={'640px'}
                    data={publicationData}
                    options={{
                        backgroundColor:'transparent',
                        color:'red',
                        theme:'material',
                        title: 'Articles by Publishers', is3D: true,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            )}
        </div>
    );
};

export default PublisherPieChart;