'use client';

import {useEffect, useMemo, useState} from 'react';
import {Check, Flame, HardDriveDownload, Skull, X} from 'lucide-react';
import {BACKUP_OPTIONS, INCIDENTS, survives, type IncidentId} from '@/lib/content';
import {useLesson} from './LessonProvider';

const INCIDENT_ICONS = {disk: HardDriveDownload, ransom: Skull, fire: Flame};

export function BackupPlanner() {
  const {markDone, clearDone} = useLesson();
  const [chosen, setChosen] = useState<string[]>([]);
  const [incident, setIncident] = useState<IncidentId | null>(null);

  const selected = useMemo(() => BACKUP_OPTIONS.filter((option) => chosen.includes(option.id)), [chosen]);

  // Asl nusxa registratura SSD diskida turadi, shuning uchun u ham alohida vosita sifatida sanaladi.
  const copies = selected.length + 1;
  const mediaTypes = new Set(['ichki-disk', ...selected.map((option) => option.mediaType)]).size;
  const offsite = selected.filter((option) => option.offsite).length;

  const rules = [
    {label: '3 ta nusxa', detail: `${copies} ta nusxa`, ok: copies >= 3},
    {label: '2 xil vosita', detail: `${mediaTypes} xil vosita`, ok: mediaTypes >= 2},
    {label: '1 tasi tashqi joyda', detail: `${offsite} ta tashqi joyda`, ok: offsite >= 1},
  ];
  const rulePassed = rules.every((rule) => rule.ok);

  const survivesAll = INCIDENTS.every((item) => selected.some((option) => survives(option, item.id)));
  const complete = rulePassed && survivesAll;

  useEffect(() => {
    if (complete) markDone('zaxira');
    else clearDone('zaxira');
  }, [complete, markDone, clearDone]);

  const toggle = (id: string) => {
    setChosen((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    setIncident(null);
  };

  const current = INCIDENTS.find((item) => item.id === incident);
  const survivors = current ? selected.filter((option) => survives(option, current.id)) : [];

  return (
    <div className="panel backup">
      <div className="backup-grid">
        <div>
          <h3>Nusxalar</h3>
          <div className="backup-origin">
            <strong>Asl nusxa</strong>
            <span>Registratura kompyuteri, ichki SSD</span>
          </div>
          <div className="backup-options">
            {BACKUP_OPTIONS.map((option) => {
              const isOn = chosen.includes(option.id);
              const lost = current && isOn && !survives(option, current.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`backup-option${isOn ? ' is-on' : ''}${lost ? ' is-lost' : ''}`}
                  aria-pressed={isOn}
                  onClick={() => toggle(option.id)}
                >
                  <span className="check-box" aria-hidden="true">
                    {isOn ? <Check size={16} strokeWidth={3} /> : null}
                  </span>
                  <span>
                    <strong>{option.name}</strong>
                    <small>{option.detail}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3>3-2-1 tekshiruvi</h3>
          <ul className="rule-list">
            {rules.map((rule) => (
              <li key={rule.label} className={rule.ok ? 'is-ok' : undefined}>
                {rule.ok ? <Check size={18} aria-hidden="true" /> : <X size={18} aria-hidden="true" />}
                <span>
                  <strong>{rule.label}</strong>
                  <small>{rule.detail}</small>
                </span>
              </li>
            ))}
          </ul>

          <h3>Rejani sinash</h3>
          <div className="incident-btns">
            {INCIDENTS.map((item) => {
              const Icon = INCIDENT_ICONS[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === incident ? 'btn is-active' : 'btn'}
                  aria-pressed={item.id === incident}
                  onClick={() => setIncident(item.id)}
                >
                  <Icon size={18} aria-hidden="true" /> {item.name}
                </button>
              );
            })}
          </div>

          {current ? (
            <div className={survivors.length ? 'incident-result is-ok' : 'incident-result is-bad'} role="status">
              <p>{current.description}</p>
              <strong>
                {survivors.length
                  ? `Ma’lumot saqlanib qoldi: ${survivors.map((option) => option.name).join(', ')}`
                  : 'Bemor ma’lumotlari butunlay yo‘qoldi'}
              </strong>
            </div>
          ) : (
            <p className="feedback">Nusxalarni tanlang va falokat turini bosing.</p>
          )}
        </div>
      </div>

      {complete ? (
        <p className="feedback is-ok" role="status">
          Reja 3-2-1 talabiga javob beradi va uchala falokatda ham ma’lumotni saqlaydi. Bir eslatma: zaxira nusxani
          vaqti-vaqti bilan tiklab ko‘ring, tekshirilmagan zaxiraga ishonib bo‘lmaydi.
        </p>
      ) : null}
    </div>
  );
}
