'use client';

import {useState} from 'react';
import {MEDIA} from '@/lib/content';

function Meter({label, value}: {label: string; value: number}) {
  return (
    <div className="meter">
      <span>{label}</span>
      <span className="meter-track" role="img" aria-label={`${label}: 5 dan ${value}`}>
        {[1, 2, 3, 4, 5].map((step) => (
          <i key={step} className={step <= value ? 'is-on' : undefined} />
        ))}
      </span>
    </div>
  );
}

export function MediaExplorer() {
  const [activeId, setActiveId] = useState(MEDIA[0].id);
  const medium = MEDIA.find((item) => item.id === activeId) ?? MEDIA[0];

  return (
    <div className="panel media">
      <div className="media-list" role="group" aria-label="Saqlash vositasini tanlang">
        {MEDIA.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === activeId ? 'media-btn is-active' : 'media-btn'}
            aria-pressed={item.id === activeId}
            onClick={() => setActiveId(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="media-detail" aria-live="polite">
        <h3>{medium.name}</h3>
        <p className="muted">{medium.summary}</p>
        <div className="meters">
          <Meter label="Tezlik" value={medium.speed} />
          <Meter label="Hajm" value={medium.capacity} />
          <Meter label="Ko‘chirish qulayligi" value={medium.portable} />
        </div>
        <dl className="media-facts">
          <div>
            <dt>Afzalligi</dt>
            <dd>{medium.plus}</dd>
          </div>
          <div>
            <dt>Kamchiligi</dt>
            <dd>{medium.minus}</dd>
          </div>
          <div>
            <dt>Klinikada</dt>
            <dd>{medium.clinic}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
