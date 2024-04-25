'use client'
import React, {  useState } from 'react';
import { TabsProps } from '../utilis/type';



const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="flex border-b border-gray-200">
                {React.Children.map(children, (child, index) => {
                    const isActive = index === activeTab;
                    const title = (child as React.ReactElement).props.title;
                    return (
                        <button
                            className={`${isActive ? 'bg-gray-200' : ''} px-4 py-2 hover:bg-gray-100`}
                            onClick={() => handleClick(index)}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>
            <div className="mt-4">{children[activeTab]}</div>
        </div>
    );
};

export default Tabs;
