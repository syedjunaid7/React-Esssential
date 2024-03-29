import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButton from "./tab-button/index.jsx";
import Section from "../section/index.jsx";
const Examples = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const renderTabContent = (tabId = null) => {
    const tabItem = EXAMPLES.find((tab) => tab.id === tabId);

    return tabItem ? (
      <>
        <h3>{tabItem.title}</h3>
        <p>{tabItem.description}</p>
        <pre>
          <code>{tabItem.code}</code>
        </pre>
      </>
    ) : (
      <p>Please select a Topic</p>
    );
  };

  return (
    <>
      <Section title="Examples" id="examples">
        <menu>
          {EXAMPLES.map(({ id, title }) => (
            <div key={id}>
              <TabButton
                handleClick={() => setSelectedTab(id)}
                activeClass={selectedTab === id}
              >
                {title}
              </TabButton>
            </div>
          ))}
        </menu>
        <div className="tab-content">{renderTabContent(selectedTab)}</div>
      </Section>
    </>
  );
};
export default Examples;
