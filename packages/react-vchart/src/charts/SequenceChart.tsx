import type React from 'react';
import type { ISequenceChartSpec, IVChartConstructor } from '@visactor/vchart';
import { VChart, registerSequenceChart } from '@visactor/vchart';
import { registers } from './registers/cartesian';
import type { BaseChartProps } from './BaseChart';
import { createChart } from './BaseChart';

export interface SequenceChartProps
  extends Omit<BaseChartProps, 'spec' | 'container' | 'type' | 'data'>,
    Omit<Partial<ISequenceChartSpec>, 'type'> {}

export const SequenceChart = createChart<React.PropsWithChildren<SequenceChartProps> & { type?: 'sequence' }>(
  'SequenceChart',
  {
    type: 'sequence',
    vchartConstrouctor: VChart as IVChartConstructor
  },
  [registerSequenceChart, ...registers]
);
