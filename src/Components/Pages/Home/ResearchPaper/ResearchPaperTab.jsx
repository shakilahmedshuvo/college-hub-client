import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleTab from './SingleTab';

const ResearchPaperTab = () => {
    const [data, setData] = useState([]);

    // toy one
    useEffect(() => {
        fetch('https://college-hub-server-hazel.vercel.app/researchPaper')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <Tabs
            className="font-semibold">
            <TabList>
                {/* table heading */}
                <Tab>
                    Research Papers Info & Links
                </Tab>
            </TabList>
            {/* table data */}
            <TabPanel>
                <div
                    className='grid lg:grid-cols-3 my-8'>
                    {
                        data.map(data => <SingleTab
                            key={data.id}
                            data={data}
                        ></SingleTab>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default ResearchPaperTab;