import React from 'react';
import { HealthBarProps } from './HealthBar.type';

export default function HealthBar({ healthPercentage }: Readonly<HealthBarProps>) {
  return (
    <div className="health-bar-container">
      <div
        className="health-bar"
        style={{ width: `${healthPercentage}%` }}
      ></div>
    </div>
  );
};