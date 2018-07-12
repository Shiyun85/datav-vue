var CHART_CONFIG = {
  options: {
    dataset: {
      source: []
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      {
        type: 'line'
      }
    ]
  },
  CHART_TYPE: {
    1: 'line',
    2: 'bar',
    3: 'bar',
    4: 'grid',
    5: 'funnel',
    6: 'line',
    7: 'bar',
    8: 'line',
    9: 'pie',
    10: 'bar',
    11: 'line',
    12: 'map',
    13: 'scatter',
    14: 'heatmap',
    15: 'gauge',
    16: 'scatter',
    17: 'scatter'
  },
  GRAPH_STYLE: {
    LINE_GRAPH: 1,
    HORIZONTAL_HISTOGRAM: 2,
    VERTICAL_HISTOGRAM: 3,
    TABLE: 4,
    FUNNEL_PLOT: 5,
    DIMENSION_LINE_GRAPH: 6,
    DIMENSION_HISTOGRAM: 7,
    PERIOD_LINE_GRAPH: 8,
    CIRCLE_GRAPH: 9,
    DISTRIBUTION_HISTOGRAM: 10,
    NUMERICAL_GRAPH: 11,
    DENSITY_MAP: 12,
    SCATTER_DIAGRAM: 13,
    THERMODYNAMIC_DIAGRAM: 14,
    DASH_BOARD: 15,
    SCATTER_DIAGRAM_XY: 16,
    SCATTER_DIAGRAM_BUBBLE: 17,
    TEXT: 18,
    MULTI_VALUE_GRAPH: 19,
    QUOTE: 10
  }
};
export default CHART_CONFIG;
