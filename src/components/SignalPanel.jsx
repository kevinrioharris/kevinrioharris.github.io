import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/SignalPanel.css';

// A stylised demo metric stream: a noisy signal that periodically drifts into
// an anomaly, gets flagged ahead of the threshold, and recovers.
const POINTS = 96;
const CYCLE = 150;
const THRESHOLD = 0.72;
const WIDTH = 480;
const HEIGHT = 170;

const sample = (t) => {
  const phase = t % CYCLE;
  const base = 0.34 + 0.06 * Math.sin(t / 7) + 0.04 * Math.sin(t / 2.3) + (Math.random() - 0.5) * 0.06;
  let drift = 0;
  if (phase > 90 && phase < 130) {
    const k = (phase - 90) / 40;
    drift = 0.52 * Math.sin(Math.PI * k) * (1 + (Math.random() - 0.5) * 0.25);
  }
  return Math.max(0.04, Math.min(0.96, base + drift));
};

const seed = () => Array.from({ length: POINTS }, (_, i) => sample(i));

const toPath = (values) =>
  values
    .map((v, i) => {
      const x = (i / (POINTS - 1)) * WIDTH;
      const y = HEIGHT - v * HEIGHT;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

const FEATURES = [
  { name: 'volume_spike', calm: 18, alert: 82 },
  { name: 'seasonality_Δ', calm: 12, alert: 61 },
  { name: 'lag_7d_mean', calm: 9, alert: 34 }
];

const SignalPanel = () => {
  const [values, setValues] = useState(seed);
  const tick = useRef(POINTS);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const id = setInterval(() => {
      tick.current += 1;
      setValues((prev) => [...prev.slice(1), sample(tick.current)]);
    }, 110);
    return () => clearInterval(id);
  }, []);

  const recent = values.slice(-14);
  const peak = Math.max(...recent);
  const rising = recent[recent.length - 1] - recent[0] > 0.12;
  const alert = peak > THRESHOLD - 0.06 || (rising && peak > 0.55);
  const risk = Math.round(Math.min(0.97, Math.max(0.03, (peak - 0.3) / 0.55)) * 100);
  const line = toPath(values);
  const area = `${line} L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`;
  const thresholdY = HEIGHT - THRESHOLD * HEIGHT;
  const last = values[values.length - 1];

  return (
    <div className={`signal-panel ${alert ? 'is-alert' : ''}`} aria-label="Demo anomaly detection monitor with simulated data" role="img">
      <div className="signal-head">
        <span className="signal-live"><span className="signal-dot" />DEMO</span>
        <span className="signal-id">simulated data · anomaly detection model</span>
      </div>

      <div className="signal-status">
        <div>
          <p className="signal-label">anomaly score</p>
          <p className="signal-value">{risk}<span>%</span></p>
        </div>
        <div className={`signal-badge ${alert ? 'alert' : ''}`}>
          {alert ? 'ALERT · anomaly flagged' : 'NOMINAL'}
        </div>
      </div>

      <svg className="signal-chart" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="signalFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={WIDTH} y1={HEIGHT * g} y2={HEIGHT * g} className="signal-grid" />
        ))}
        <line x1="0" x2={WIDTH} y1={thresholdY} y2={thresholdY} className="signal-threshold" />
        <path d={area} fill="url(#signalFill)" className="signal-area" />
        <path d={line} className="signal-line" />
        <circle cx={WIDTH} cy={HEIGHT - last * HEIGHT} r="4" className="signal-head-dot" />
      </svg>

      <div className="signal-shap">
        <p className="signal-label">SHAP · top drivers</p>
        {FEATURES.map((f) => (
          <div className="shap-row" key={f.name}>
            <span className="shap-name">{f.name}</span>
            <span className="shap-track">
              <span className="shap-bar" style={{ width: `${alert ? f.alert : f.calm}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalPanel;
