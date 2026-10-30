'use client';

import {useState} from 'react';
import {RotateCcw} from 'lucide-react';
import {CATEGORY_LABELS, SORT_ITEMS, type Category, type SortItem} from '@/lib/content';
import {useLesson} from './LessonProvider';

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];

type Feedback = {ok: boolean; text: string};

export function SortGame() {
  const {markDone, clearDone} = useLesson();
  const [placed, setPlaced] = useState<Record<string, Category>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const remaining = SORT_ITEMS.filter((item) => !placed[item.id]);
  const finished = remaining.length === 0;

  const place = (item: SortItem, category: Category) => {
    if (item.category === category) {
      const next = {...placed, [item.id]: category};
      setPlaced(next);
      setSelected(null);
      setFeedback({ok: true, text: `${item.name}: ${item.why}`});
      if (Object.keys(next).length === SORT_ITEMS.length) markDone('saralash');
    } else {
      setMistakes((count) => count + 1);
      setFeedback({ok: false, text: `${item.name} bu guruhga kirmaydi. Dastur nima vazifani bajarishini o‘ylab ko‘ring.`});
    }
  };

  const reset = () => {
    setPlaced({});
    setSelected(null);
    setMistakes(0);
    setFeedback(null);
    clearDone('saralash');
  };

  const selectedItem = SORT_ITEMS.find((item) => item.id === selected);

  return (
    <div className="panel">
      <div className="tray" aria-label="Saralanmagan dasturlar">
        {remaining.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === selected ? 'sort-card is-selected' : 'sort-card'}
            aria-pressed={item.id === selected}
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('text/plain', item.id);
              setSelected(item.id);
            }}
            onClick={() => setSelected(item.id === selected ? null : item.id)}
          >
            <strong>{item.name}</strong>
            <span>{item.note}</span>
          </button>
        ))}
        {finished ? <p className="tray-done">Barcha dasturlar saralandi.</p> : null}
      </div>

      <div className="bins">
        {CATEGORIES.map((category) => {
          const items = SORT_ITEMS.filter((item) => placed[item.id] === category);
          return (
            <button
              key={category}
              type="button"
              className={`bin bin-${category}`}
              disabled={!selectedItem}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                const item = SORT_ITEMS.find((entry) => entry.id === event.dataTransfer.getData('text/plain'));
                if (item) place(item, category);
              }}
              onClick={() => selectedItem && place(selectedItem, category)}
            >
              <span className="bin-name">{CATEGORY_LABELS[category].name}</span>
              <span className="bin-hint">{CATEGORY_LABELS[category].hint}</span>
              <span className="bin-items">
                {items.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </span>
            </button>
          );
        })}
      </div>

      <p className={feedback ? `feedback ${feedback.ok ? 'is-ok' : 'is-bad'}` : 'feedback'} role="status">
        {feedback?.text ?? 'Avval yuqoridagi dasturlardan birini tanlang.'}
      </p>

      <div className="panel-foot">
        <span>
          Joylandi: <strong>{SORT_ITEMS.length - remaining.length}</strong> / {SORT_ITEMS.length} · Xato:{' '}
          <strong>{mistakes}</strong>
        </span>
        <button type="button" className="btn" onClick={reset}>
          <RotateCcw size={17} aria-hidden="true" /> Qayta boshlash
        </button>
      </div>
    </div>
  );
}
