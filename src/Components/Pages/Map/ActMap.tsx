import { useState } from 'react';

const tabs = ['ACT 1', 'ACT 2', 'ACT 3', 'ACT 4', 'ACT 5', 'ACT 6', 'ACT 7', 'ACT 8', 'ACT 9', 'ACT 10', 'Endgame'];

export default function ActMap() {
  const [activeTab, setActiveTab] = useState('ACT 1');

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">

      </div>
    </div>
  );

}