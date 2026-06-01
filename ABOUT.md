### About this Demo

This Vue application demonstrates the use of **VisuallyJS** to create various **Area and Line Charts**.

### VisuallyJS Components Used

The demo utilizes several components from the `@visuallyjs/browser-ui-vue` package:

- **AreaChartComponent**: Used to render area charts, including basic area and area range charts.
- **LineChartComponent**: Used to render line charts, including basic line, spline, and line range charts.

### Component Options

Each chart component receives an `options` object that configures its behavior and appearance. Common options include:

- **axes**: Configuration for the X and Y axes (e.g., scale types, labels, ticks).
- **series**: Data series configuration (e.g., colors, marker types, line styles).
- **range**: (For range charts) Specifies the properties in the data that define the low and high values of the range.
- **inverted**: Set to `true` to swap the X and Y axes.

### CSS Requirement

For the VisuallyJS components to render correctly, the standard VisuallyJS stylesheet must be included in the project. In this demo, it is imported in `src/index.css`:

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
