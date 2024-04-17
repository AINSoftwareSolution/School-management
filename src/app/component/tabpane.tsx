import React from 'react';

interface TabPaneProps {
    children: React.ReactNode
    title: string;
}

const TabPane: React.FC<TabPaneProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default TabPane;
