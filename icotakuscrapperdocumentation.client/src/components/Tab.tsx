import '../styles/components/tab.scss';
export interface TabProps {
    header: JSX.Element | string;
    content: JSX.Element | string;
    isSelected: boolean;
    id: number;
}

export interface TabsProps {
    idName: string;
    items: TabProps[];
}

const TabComponent: React.FC<TabsProps> = ({ idName, items }) => {

    function selectTab(tabId: number) {
        const tabContainer = document.getElementById(idName);
        if (!tabContainer) 
            return;
        
        const tabsHeader = tabContainer?.querySelectorAll('header .tab-item') as NodeListOf<HTMLElement>;
        tabsHeader.forEach(tab => {
            tab.classList.remove('selected');
        });
        
        const tabsContent = tabContainer?.querySelectorAll('.tab-content .tab-item') as NodeListOf<HTMLElement>;
        tabsContent.forEach(tab => {
            tab.classList.remove('selected');
        });
        
        const tabHeader = tabContainer.querySelector(`header .tab-item[data-tab-id="${tabId}"]`);
        tabHeader?.classList.add('selected');
        
        const tabContent = tabContainer.querySelector(`.tab-content .tab-item[data-tab-id="${tabId}"]`);
        tabContent?.classList.add('selected');
    }

    return (
        <article id={idName} className="tab-container">
            <header className="tab-header">
                {items.map(tabProps =>
                    <button className={`tab-item ${tabProps.isSelected ? 'selected' : ''}`} data-tab-id={tabProps.id}
                            key={tabProps.id} onClick={() => selectTab(tabProps.id)}>{tabProps.header}</button>
                )}
            </header>
            <div className="tab-content">
                {items.map(tabProps =>
                    <div className={`tab-item ${tabProps.isSelected ? 'selected' : ''}`} data-tab-id={tabProps.id}
                         key={tabProps.id}>{tabProps.content}</div>
                )}
            </div>
        </article>
    );
}

export default TabComponent;