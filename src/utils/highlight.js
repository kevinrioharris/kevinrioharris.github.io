import React from 'react';

// Numbers worth drawing the eye to: "$10K/hour", "30-minute", "10,000+", "40%", "4 business units", "10 hours to just 10 minutes"
const METRIC_PATTERN = /((?:US)?\$[\d,.]+K?\/hour|\d[\d,.]*\+|\d+(?:\.\d+)?%|\d+-minute|\d+ (?:RGE mills|business units|hours|minutes))/g;

export const highlightMetrics = (text) =>
  text.split(METRIC_PATTERN).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="metric">{part}</strong> : part
  );
