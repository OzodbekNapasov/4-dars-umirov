'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {Check, RefreshCw, RotateCcw, ScanSearch, ShieldAlert, ShieldCheck, X} from 'lucide-react';
import {ACTIONS, ACTION_WRONG, THREATS, type ActionId, type Threat} from '@/lib/content';
import {useLesson} from './LessonProvider';

type Phase = 'setup' | 'updating' | 'scanning' | 'review' | 'report';
type ScanType = 'quick' | 'full';

const UPDATE_MS = 1400;
const SCAN_MS = 4000;
const TICK_MS = 120;

const SCAN_PATHS = [
  'C:\\Windows\\System32\\drivers',
  'C:\\Users\\Hamshira\\AppData\\Roaming',
  'C:\\Users\\Hamshira\\Downloads',
  'C:\\Users\\Hamshira\\Documents',
  'C:\\Program Files\\LabPrint',
  'C:\\Users\\Public',
  'E:\\ (fleshka)',
];

function isFound(threat: Threat, scanType: ScanType, updated: boolean) {
  return (scanType === 'full' || !threat.fullScanOnly) && (updated || !threat.needsUpdate);
}

export function AntivirusSim() {
  const {markDone, clearDone} = useLesson();
  const [phase, setPhase] = useState<Phase>('setup');
  const [updated, setUpdated] = useState(false);
  const [scanType, setScanType] = useState<ScanType>('full');
  const [progress, setProgress] = useState(0);
  const [decisions, setDecisions] = useState<Record<string, ActionId>>({});
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => stopTimer, []);

  const found = useMemo(() => THREATS.filter((threat) => isFound(threat, scanType, updated)), [scanType, updated]);
  const missed = useMemo(() => THREATS.filter((threat) => !isFound(threat, scanType, updated)), [scanType, updated]);

  const run = (duration: number, done: () => void) => {
    stopTimer();
    setProgress(0);
    const start = Date.now();
    timer.current = setInterval(() => {
      const value = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(value);
      if (value >= 100) {
        stopTimer();
        done();
      }
    }, TICK_MS);
  };

  const startUpdate = () => {
    setPhase('updating');
    run(UPDATE_MS, () => {
      setUpdated(true);
      setPhase('setup');
    });
  };

  const startScan = () => {
    setPhase('scanning');
    setDecisions({});
    run(SCAN_MS, () => setPhase('review'));
  };

  const restart = () => {
    stopTimer();
    setPhase('setup');
    setUpdated(false);
    setScanType('full');
    setProgress(0);
    setDecisions({});
    clearDone('simulyator');
  };

  const correctCount = found.filter((threat) => threat.best.includes(decisions[threat.id])).length;
  const allDecided = found.every((threat) => decisions[threat.id]);
  const scanPath = SCAN_PATHS[Math.min(SCAN_PATHS.length - 1, Math.floor((progress / 100) * SCAN_PATHS.length))];

  const finish = () => {
    setPhase('report');
    if (missed.length === 0 && correctCount === found.length) markDone('simulyator');
  };

  return (
    <div className="av" data-phase={phase}>
      <div className="av-bar">
        <span className="av-brand">
          <ShieldCheck size={20} aria-hidden="true" /> Klinika Himoyasi
        </span>
        <span className={updated ? 'av-base is-ok' : 'av-base'}>
          Baza: {updated ? 'yangilangan' : '47 kun oldin yangilangan'}
        </span>
      </div>

      {(phase === 'setup' || phase === 'updating') && (
        <div className="av-body">
          <div className="av-setup">
            <div>
              <h3>1. Antivirus bazasi</h3>
              <button type="button" className="btn" onClick={startUpdate} disabled={updated || phase === 'updating'}>
                <RefreshCw size={18} aria-hidden="true" />
                {updated ? 'Baza yangilandi' : phase === 'updating' ? 'Yangilanmoqda...' : 'Bazani yangilash'}
              </button>
            </div>
            <div>
              <h3>2. Skanerlash turi</h3>
              <div className="segmented" role="group" aria-label="Skanerlash turi">
                <button type="button" aria-pressed={scanType === 'quick'} onClick={() => setScanType('quick')}>
                  Tezkor
                </button>
                <button type="button" aria-pressed={scanType === 'full'} onClick={() => setScanType('full')}>
                  To‘liq
                </button>
              </div>
            </div>
          </div>
          {phase === 'updating' ? <Progress value={progress} /> : null}
          <button type="button" className="btn btn-primary" onClick={startScan} disabled={phase === 'updating'}>
            <ScanSearch size={19} aria-hidden="true" /> Skanerlashni boshlash
          </button>
        </div>
      )}

      {phase === 'scanning' && (
        <div className="av-body">
          <h3>Skanerlanmoqda...</h3>
          <Progress value={progress} />
          <code className="av-path">{scanPath}</code>
        </div>
      )}

      {phase === 'review' && (
        <div className="av-body">
          <h3>
            <ShieldAlert size={22} aria-hidden="true" /> Topilgan xavflar: {found.length}
          </h3>
          <ul className="threats">
            {found.map((threat) => {
              const decision = decisions[threat.id];
              const correct = decision ? threat.best.includes(decision) : false;
              return (
                <li key={threat.id}>
                  <div className="threat-head">
                    <strong>{threat.type}</strong>
                    <code>{threat.path}</code>
                  </div>
                  <div className="threat-actions" role="group" aria-label={`${threat.type} uchun qaror`}>
                    {ACTIONS.map((action) => (
                      <button
                        key={action.id}
                        type="button"
                        aria-pressed={decision === action.id}
                        onClick={() => setDecisions((prev) => ({...prev, [threat.id]: action.id}))}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                  {decision ? (
                    <p className={correct ? 'feedback is-ok' : 'feedback is-bad'}>
                      {correct ? threat.feedback : ACTION_WRONG[decision]}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <button type="button" className="btn btn-primary" disabled={!allDecided} onClick={finish}>
            Hisobotni ko‘rish
          </button>
        </div>
      )}

      {phase === 'report' && (
        <div className="av-body">
          <h3>Hisobot</h3>
          <div className="av-score">
            <div>
              <strong>{correctCount} / {found.length}</strong>
              <span>to‘g‘ri qaror</span>
            </div>
            <div>
              <strong>{found.length} / {THREATS.length}</strong>
              <span>xavf topildi</span>
            </div>
          </div>

          {missed.length > 0 ? (
            <div className="av-missed">
              <h4>Kompyuterda qolib ketgan xavflar: {missed.length}</h4>
              <ul>
                {missed.map((threat) => (
                  <li key={threat.id}>
                    <X size={17} aria-hidden="true" />
                    <span>
                      <strong>{threat.type}.</strong> {threat.missed}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="feedback is-ok">
              <Check size={18} aria-hidden="true" /> Yangilangan baza va to‘liq skanerlash barcha xavflarni topdi.
            </p>
          )}

          {correctCount < found.length ? (
            <p className="feedback is-bad">Ba’zi qarorlar noto‘g‘ri. Yuqoridagi izohlarni eslang va qayta urinib ko‘ring.</p>
          ) : null}

          <button type="button" className="btn" onClick={restart}>
            <RotateCcw size={17} aria-hidden="true" /> Qayta boshlash
          </button>
        </div>
      )}
    </div>
  );
}

function Progress({value}: {value: number}) {
  return (
    <div className="progress" role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}>
      <span style={{width: `${value}%`}} />
    </div>
  );
}
