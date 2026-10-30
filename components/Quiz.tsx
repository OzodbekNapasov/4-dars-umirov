'use client';

import {useState} from 'react';
import {ArrowRight, RotateCcw} from 'lucide-react';
import {QUIZ} from '@/lib/content';
import {useLesson} from './LessonProvider';

function shuffled<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function gradeFor(score: number) {
  if (score >= 11) return '5 baho darajasi: mavzu to‘liq o‘zlashtirilgan.';
  if (score >= 9) return '4 baho darajasi: mavzu yaxshi o‘zlashtirilgan.';
  if (score >= 7) return '3 baho darajasi: asosiy tushunchalarni takrorlang.';
  return 'Mavzuni qayta ko‘rib chiqing va testni yana ishlang.';
}

export function Quiz() {
  const {markDone, clearDone} = useLesson();
  const [questions, setQuestions] = useState(QUIZ);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const answered = picked !== null;

  const choose = (optionIndex: number) => {
    if (answered) return;
    setPicked(optionIndex);
    if (optionIndex === question.answer) setScore((value) => value + 1);
  };

  const next = () => {
    if (index + 1 === questions.length) {
      setFinished(true);
      markDone('viktorina');
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  };

  const restart = () => {
    setQuestions(shuffled(QUIZ));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
    clearDone('viktorina');
  };

  if (finished) {
    return (
      <div className="panel result">
        <p className="result-score">
          {score} / {questions.length}
        </p>
        <p>{gradeFor(score)}</p>
        <button type="button" className="btn" onClick={restart}>
          <RotateCcw size={17} aria-hidden="true" /> Qayta ishlash
        </button>
      </div>
    );
  }

  return (
    <div className="panel quiz">
      <div className="quiz-top">
        <span className="step-count">
          {index + 1}-savol, jami {questions.length} ta
        </span>
        <span className="step-count">To‘g‘ri: {score}</span>
      </div>
      <div className="quiz-progress" aria-hidden="true">
        <span style={{width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%`}} />
      </div>
      <h3>{question.question}</h3>
      <div className="option-list">
        {question.options.map((option, optionIndex) => {
          let className = 'option';
          if (answered) {
            if (optionIndex === question.answer) className += ' is-correct';
            else if (optionIndex === picked) className += ' is-wrong';
          }
          return (
            <button key={option} type="button" className={className} disabled={answered} onClick={() => choose(optionIndex)}>
              {option}
            </button>
          );
        })}
      </div>
      {answered ? (
        <>
          <p className={picked === question.answer ? 'feedback is-ok' : 'feedback is-bad'} role="status">
            {question.explain}
          </p>
          <button type="button" className="btn btn-primary" onClick={next}>
            {index + 1 === questions.length ? 'Natijani ko‘rish' : 'Keyingi savol'} <ArrowRight size={18} aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>
  );
}
