'use client';

import {createContext, useCallback, useContext, useMemo, useState} from 'react';

type LessonState = {
  done: ReadonlySet<string>;
  markDone: (id: string) => void;
  clearDone: (id: string) => void;
};

const LessonContext = createContext<LessonState | null>(null);

export function LessonProvider({children}: {children: React.ReactNode}) {
  const [done, setDone] = useState<ReadonlySet<string>>(new Set());

  const markDone = useCallback((id: string) => {
    setDone((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }, []);

  const clearDone = useCallback((id: string) => {
    setDone((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const value = useMemo(() => ({done, markDone, clearDone}), [done, markDone, clearDone]);

  return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
}

export function useLesson() {
  const context = useContext(LessonContext);
  if (!context) throw new Error('useLesson LessonProvider ichida ishlatilishi kerak');
  return context;
}
