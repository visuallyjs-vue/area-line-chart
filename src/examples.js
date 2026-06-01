import { AreaChartComponent, LineChartComponent } from "@visuallyjs/browser-ui-vue";

import BasicLineConfig from "./configs/basic-line"
import LineWithSplineConfig from "./configs/line-with-spline"
import AreaRangeConfig from "./configs/area-range"
import BasicAreaConfig from "./configs/basic-area"
import LineRangeConfig from "./configs/line-range"
import LineRangeInvertedConfig from "./configs/line-range-inverted"
import AreaRangeInvertedConfig from "./configs/area-range-inverted"
import LineInvertedConfig from "./configs/line-inverted"
import AreaInvertedConfig from "./configs/area-inverted"

export const chartOptions = [
    BasicLineConfig,
    LineWithSplineConfig,
    BasicAreaConfig,
    AreaRangeConfig,
    LineRangeConfig,
    LineRangeInvertedConfig,
    AreaRangeInvertedConfig,
    LineInvertedConfig,
    AreaInvertedConfig
]

export const charts = [
    {
        desc:"Line chart, multiple series",
        component: LineChartComponent,
        options: BasicLineConfig
    },
    {
        desc:"Line chart with spline",
        component: LineChartComponent,
        options: LineWithSplineConfig
    },
    {
        desc:"Basic area chart",
        component: AreaChartComponent,
        options: BasicAreaConfig
    },
    {
        desc:"Area range chart",
        component: AreaChartComponent,
        options: AreaRangeConfig
    },
    {
        desc:"Line range chart",
        component: LineChartComponent,
        options: LineRangeConfig
    },
    {
        desc:"Line range chart, inverted",
        component: LineChartComponent,
        options: LineRangeInvertedConfig
    },
    {
        desc:"Area range chart, inverted",
        component: AreaChartComponent,
        options: AreaRangeInvertedConfig
    },
    {
        desc:"Line chart, inverted",
        component: LineChartComponent,
        options: LineInvertedConfig
    },
    {
        desc:"Area chart, inverted",
        component: AreaChartComponent,
        options: AreaInvertedConfig
    }
]
