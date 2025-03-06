import { useState } from 'react';
import Act1 from './Act/Act1';
import Act2 from './Act/Act2';
import Act3 from './Act/Act3';
import Act4 from './Act/Act4';
import Act5 from './Act/Act5';
import Act6 from './Act/Act6';
import Act7 from './Act/Act7';
import Act8 from './Act/Act8';
import Act9 from './Act/Act9';
import Act10 from './Act/Act10';
import EndGame from './Act/EndGame';
import { MapTab } from './ActMap.type';

const tabs: MapTab[] = [
  { map: <Act1 />, name: 'Act 1' },
  { map: <Act2 />, name: 'Act 2' },
  { map: <Act3 />, name: 'Act 3' },
  { map: <Act4 />, name: 'Act 4' },
  { map: <Act5 />, name: 'Act 5' },
  { map: <Act6 />, name: 'Act 6' },
  { map: <Act7 />, name: 'Act 7' },
  { map: <Act8 />, name: 'Act 8' },
  { map: <Act9 />, name: 'Act 9' },
  { map: <Act10 />, name: 'Act 10' },
  { map: <EndGame />, name: 'End Game' },
];

export default function ActMap() {
  const [activeTab, setActiveTab] = useState<MapTab>({ map: <Act1 />, name: 'Act 1' });

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`tab ${tab.name === activeTab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeTab.map}
      </div>
    </div>
  );

}