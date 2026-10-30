'use client';

import {useState} from 'react';
import {ArrowRight, RotateCcw} from 'lucide-react';
import {SCENARIOS} from '@/lib/content';
import {useLesson} from './LessonProvider';

export function ScenarioDrill() {
  const {markDone, clearDone} = useLesson();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const scenario = SCENARIOS[index];
  const answer = picked === null ? null : scenario.options[picked];

  const choose = (optionIndex: number) => {
    if (picked !== null) return;
    setPicked(optionIndex);
    if (scenario.options[optionIndex].correct) setScore((value) => value + 1);
  };

  const next = () => {
    if (index + 1 === SCENARIOS.length) {
      setFinished(true);
      markDone('vaziyatlar');
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
    clearDone('vaziyatlar');
  };

  if (finished) {
    return (
      <div className="panel result">
        <p className="result-score">
          {score} / {SCENARIOS.length}
        </p>
        <p>
          {score === SCENARIOS.length
            ? 'Hamma vaziyatda to‘g‘ri harakat qildingiz.'
            : 'Xatolar o‘rganish uchun: noto‘g‘ri tanlangan vaziyatlarga qaytib, izohlarni qayta o‘qing.'}
        </p>
        <button type="button" className="btn" onClick={restart}>
          <RotateCcw size={17} aria-hidden="true" /> Qayta boshlash
        </button>
      </div>
    );
  }

  return (
    <div className="panel scenario">
      <p className="step-count">
        {index + 1}-vaziyat, jami {SCENARIOS.length} ta
      </p>
      <h3>{scenario.title}</h3>
      <p>{scenario.situation}</p>
      {scenario.evidence ? (
        <div className="evidence">
          {scenario.evidence.map((line) => (
            <code key={line}>{line}</code>
          ))}
        </div>
      ) : null}
      <div className="option-list">
        {scenario.options.map((option, optionIndex) => {
          let className = 'option';
          if (picked !== null) {
            if (option.correct) className += ' is-correct';
            else if (optionIndex === picked) className += ' is-wrong';
          }
          return (
            <button key={option.text} type="button" className={className} disabled={picked !== null} onClick={() => choose(optionIndex)}>
              {option.text}
            </button>
          );
        })}
      </div>
      {answer ? (
        <>
          <p className={answer.correct ? 'feedback is-ok' : 'feedback is-bad'} role="status">
            {answer.feedback}
          </p>
          <button type="button" className="btn btn-primary" onClick={next}>
            {index + 1 === SCENARIOS.length ? 'Natijani ko‘rish' : 'Keyingi vaziyat'} <ArrowRight size={18} aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>
  );
}
