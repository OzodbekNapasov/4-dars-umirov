'use client';

import {useEffect, useState} from 'react';
import {Check} from 'lucide-react';
import {NAV_ITEMS} from '@/lib/content';
import {useLesson} from './LessonProvider';

const EXERCISE_COUNT = NAV_ITEMS.filter((item) => item.exercise).length;

export function SideNav() {
  const {done} = useLesson();
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = NAV_ITEMS[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <nav className="sidenav" aria-label="Dars bo‘limlari">
      <p className="sidenav-progress">
        Mashqlar: <strong>{done.size}</strong> / {EXERCISE_COUNT}
      </p>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? 'is-active' : undefined}
              aria-current={item.id === active ? 'true' : undefined}
            >
              {item.label}
              {item.exercise ? (
                <span className={done.has(item.id) ? 'nav-mark is-done' : 'nav-mark'} aria-hidden="true">
                  {done.has(item.id) ? <Check size={13} strokeWidth={3} /> : null}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
