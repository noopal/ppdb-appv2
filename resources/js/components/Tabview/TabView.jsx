import React, { useState } from "react";

function TabView({ title, tabs = {} }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeteTab = (index) => {
        setActiveTabIndex(index);
    };
    return (
        <div className="tabView">
            {title && <h4 className="title">{title}</h4>}
            <div className="body">
                {Object.keys(tabs).length === 0 ? (
                    <div>No Tabs</div>
                ) : (
                    <div>
                        <div className="tabs">
                            {tabs.map((tab, index) => (
                                <label
                                    key={index}
                                    className={
                                        index === activeTabIndex
                                            ? "active-tab"
                                            : "tab"
                                    }
                                    onClick={() => activeteTab(index)}
                                >
                                    {tab.name}
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="content">{tabs[activeTabIndex].content}</div>
        </div>
    );
}
export default TabView;
