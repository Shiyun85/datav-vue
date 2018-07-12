import CHART_CONFIG from '@/common/js/echart-config';
export function getChartData(item) {
  console.log(item);
}
export function getDimensionsFromDatas(datas) {
  let dimensions = ['name'];
  datas.forEach(element => {
    dimensions.push(element.dimnsion || element.graphLabel);
  });

  return dimensions;
}
/**
 * 获取每一列的值，每一列包含一或多个维度
 * @param {array} datas
 */
export function getColumnValues(datas) {
  let colmuns = [];
  let objArray = {};
  datas.forEach(item => {
    let data = item.data;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let key = Object.keys(element)[0];
      let value = Object.values(element)[0];
      if (!objArray[key]) {
        objArray[key] = [key];
      }
      objArray[key].push(parseFloat(value));
    }
  });
  for (const item in objArray) {
    if (objArray.hasOwnProperty(item)) {
      const element = objArray[item];
      colmuns.push(element);
    }
  }
  return colmuns;
}
/**
 *生成图表option
 * @param {JSON} result
 */
export function genrationOption(result) {
  let options = {};
  let datas = result.datas;
  let columnValues = getColumnValues(datas);
  let dimensions = columnValues(datas);
  options.dataset = {
    source: [dimensions, ...columnValues]
  };
  for (let index = 0; index < dimensions.length - 1; index++) {
    options.series.push({
      type: CHART_CONFIG.CHART_TYPE[result.data.styleId]
    });
  }
  return options;
}
