/**
 * @description 包含基础的折柱饼图，提供坐标轴、离散图例以及 tooltip、crosshair、label 组件
 */
import { VChart } from './export/core';
import { LineChart, BarChart, PieChart } from './export/chart';
import { LineSeries, BarSeries, PieSeries } from './export/series';
import { SymbolMark, LineMark, RectMark, ArcMark, TextMark, PathMark } from './export/mark';

import {
  CartesianLinearAxis,
  CartesianBandAxis,
  CartesianTimeAxis,
  DiscreteLegend,
  Tooltip,
  CartesianCrossHair,
  Label
} from './export/component';

// charts
VChart.useChart([LineChart, BarChart, PieChart]);

// series
VChart.useSeries([LineSeries, BarSeries, PieSeries]);

// marks
VChart.useMark([SymbolMark, LineMark, RectMark, ArcMark, TextMark, PathMark]);

// components
VChart.useComponent([
  CartesianLinearAxis,
  CartesianBandAxis,
  CartesianTimeAxis,
  DiscreteLegend,
  Tooltip,
  CartesianCrossHair,
  Label
]);

export { VChart };