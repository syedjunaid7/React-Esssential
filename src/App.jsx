import CoreConcept from "./modules/core-concept/CoreConcept";
import Header from "./modules/header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./modules/core-concept/tab-button";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, _) => (
              <li>
                <CoreConcept {...item} />
              </li>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
