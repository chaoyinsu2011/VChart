# How to Reference VChart in Projects

In the [How to Get VChart](./How_to_Get_VChart) chapter, we introduced the ways to get VChart. This chapter will introduce how to reference VChart under these ways.

## Use with cdn

After getting the VChart file from [cdn](./How_to_Get_VChart#cdn-获取), you can add it to the `<script>` tag in the HTML file:

```html
<body>
  <div id="chart" style="outline: solid red 1px; width: 100%; height: 500px"></div>
</body>
<!-- Reference VChart -->
<script src="https://unpkg.com/@visactor/vchart/build/index.min.js"></script>

<script>
  // Create a pie chart
  const spec = {
    type: 'pie',
    data: [
      {
        id: 'id0',
        values: [
          { type: 'oxygen', value: '46.60' },
          { type: 'silicon', value: '27.72' },
          { type: 'aluminum', value: '8.13' },
          { type: 'iron', value: '5' },
          { type: 'calcium', value: '3.63' },
          { type: 'sodium', value: '2.83' },
          { type: 'potassium', value: '2.59' },
          { type: 'others', value: '3.5' }
        ]
      }
    ],
    outerRadius: 0.8,
    valueField: 'value',
    categoryField: 'type',
    title: {
      visible: true,
      text: 'Surface Element Content Statistics'
    },
    legends: {
      visible: true,
      orient: 'left'
    },
    label: {
      visible: true
    },
    tooltip: {
      mark: {
        content: [
          {
            key: datum => datum['type'],
            value: datum => datum['value'] + '%'
          }
        ]
      }
    }
  };

  const vchart = new VChart.default(spec, { dom: 'chart' });
  vchart.renderAsync();
</script>
```

## Use with npm

After installing `@visactor/vchart` into your project via the [npm](./How_to_Get_VChart#npm-获取) method, you can use it as follows:

```ts
import { default as VChart } from '@visactor/vchart';

const spec = {
  type: 'pie',
  data: [
    {
      id: 'id0',
      values: [
        { type: 'oxygen', value: '46.60' },
        { type: 'silicon', value: '27.72' },
        { type: 'aluminum', value: '8.13' },
        { type: 'iron', value: '5' },
        { type: 'calcium', value: '3.63' },
        { type: 'sodium', value: '2.83' },
        { type: 'potassium', value: '2.59' },
        { type: 'others', value: '3.5' }
      ]
    }
  ],
  outerRadius: 0.8,
  valueField: 'value',
  categoryField: 'type',
  title: {
    visible: true,
    text: 'Surface Element Content Statistics'
  },
  legends: {
    visible: true,
    orient: 'left'
  },
  label: {
    visible: true
  },
  tooltip: {
    mark: {
      content: [
        {
          key: datum => datum['type'],
          value: datum => datum['value'] + '%'
        }
      ]
    }
  }
};

// Create a VChart instance based on the prepared chart dom container
const vchart = new VChart(spec, {
  dom: 'chart'
});

// Call the rendering method to draw the chart
vchart.renderAsync();
```

## Import on demand

`@visactor/vchart` provides all VChart functionality by default. If your project has strong requirements for code size, you can also import the relevant charts and components on demand. Let's take a bar chart as an example to demonstrate how to import on demand:

```ts
// Import the VChart core module
import { VChart } from '@visactor/vchart/core';
// Import bar chart
import { BarChart } from '@visactor/vchart/chart';
// Import Cartesian axes, Tooltip, CrossHair components
import { CartesianLinearAxis, CartesianBandAxis, Tooltip, CartesianCrossHair } from '@visactor/vchart/component';
// Register chart
VChart.useChart([BarChart]);
// Register components
VChart.useComponent([CartesianLinearAxis, CartesianBandAxis, Tooltip, CartesianCrossHair]);
```

Note that if your project uses cjs (commonJS), please import from the `@visactor/vchart/cjs` directory as follows:

```js
// Import the VChart core module
const { VChart } = require('@visactor/vchart/cjs/core');
// Import bar chart
const { BarChart } = require('@visactor/vchart/cjs/chart');
// Import Cartesian axes, Tooltip, CrossHair components
const {
  CartesianLinearAxis,
  CartesianBandAxis,
  Tooltip,
  CartesianCrossHair
} = require('@visactor/vchart/cjs/component');
// Register chart
VChart.useChart([BarChart]);
// Register components
VChart.useComponent([CartesianLinearAxis, CartesianBandAxis, Tooltip, CartesianCrossHair]);
```

You can specifically view the code example: [On-demand import of bar chart](https://codesandbox.io/s/the-example-of-visactor-vcharts-shrinking-bundle-size-gj768g)