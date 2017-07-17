import React from 'react';
import setActiveTab from './../../decorators/handleTabs';
import tabs from './tabs.json';

import TabPerson from './tabPerson';
import TabBusiness from './tabBusiness';

// import './less/index.less';

const Services = ({activeTabId, setActiveTab}) => {

    const tabHeaders = tabs.map(tab => {
        const active = tab.id === activeTabId ? " active" : "";

        return <div className={"tab-header_item" + active}
                    key={tab.id}
                    onClick={setActiveTab(tab.id)}
                >
                    {tab.title}
                </div>
    });

    return (
        <div className="content-card services flex-row">
            <div className="content-card__caption flex-column">
                <span>УСЛУГИ</span>
            </div>
            <div className="content-card__body flex-column">
                <div className="tab-hedear flex-row">
                    { tabHeaders }
                </div>
                { getTabContent()}
            </div>
        </div>
    );

    function getTabContent() {
        switch (activeTabId) {
            case 1:
                return <TabPerson/>;
            case 2:
                return <TabBusiness/>;

            default:
                return '';
        }
    }
};

export default setActiveTab(Services);