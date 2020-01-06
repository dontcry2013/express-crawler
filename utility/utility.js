/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
class Utility {
  static getYearCount($) {
    return $('#bj > div.sline.clearfix > div').length;
  }

  // get the province ID
  static getProvinceId(divValue, map) {
    const cityValue = '市';
    const provinceValue = '省';
    let provinceName = divValue;
    if (provinceName.search(cityValue) != -1) {
      const provinceNameArr = divValue.split(cityValue);
      // eslint-disable-next-line prefer-destructuring
      provinceName = provinceNameArr[0];
    } else if (provinceName.search(provinceValue) != -1) {
      const provinceNameArr = divValue.split(provinceValue);
      // eslint-disable-next-line prefer-destructuring
      provinceName = provinceNameArr[0];
    }
    let judgeCount = 0;
    Object.keys(map).forEach((key) => {
      if (key == provinceName) {
        judgeCount++;
      }
    });
    if (judgeCount > 0) {
      return map[provinceName];
    }
    return 0;
  }

  // Get the year and convert it be an int type
  static getYear($, j) {
    const judgeNumber = this.getYearCount($) - 1;
    if (j > judgeNumber || typeof j === 'string' || j <= 0) {
      return 0;
    }
    let year = $(`#bj>div.sline.clearfix > div:nth-child(${j})`).text();
    year = parseInt(year.substr(0, year.length - 1), 10);
    return year;
  }

  // Get data that does not have a liberal arts section
  static specialRecord(provinceID, year, level, tdValue) {
    if (typeof (tdValue) !== 'string') {
      return 0;
    }
    const record = [];
    const score = parseInt(tdValue.substr(0, 3), 10);
    record.push(provinceID);
    record.push(year);
    record.push(score);
    // If td is the second column in tr, it is liberal arts
    record.push('all');
    record.push(level);
    return record;
  }

  // Get data that have a liberal arts section
  static recordScore(provinceID, year, level, iii, tdValue) {
    if (typeof (tdValue) !== 'string') {
      return 0;
    }
    const score = parseInt(tdValue.substr(0, 3), 10);
    const record = [];
    record.push(provinceID);
    record.push(year);
    record.push(score);
    if (iii === 1) {
      // If td is the second column in tr, it is liberal arts
      record.push('art');
    } else {
      record.push('science');
    }
    record.push(level);
    return record;
  }

  // inserts the retrieved data into the result array
  static pushDataIntoArray(judgeDivision, provinceID, year, level, iii, tdValue, result) {
    if (typeof (tdValue) !== 'string') {
      return 0;
    }
    // special treatment of 2019-2017 Shanghai and zhejiang scores
    if (judgeDivision) {
      // clean up the useless data in the tables of Shanghai and Zhejiang
      // stores each piece of data in an array
      if (tdValue !== '分数线' && tdValue !== '综合') {
        result.push(this.specialRecord(provinceID, year, level, tdValue));
      }
    } else {
      // get a grade and a liberal arts (science) subject for the year of the city
      result.push(this.recordScore(provinceID, year, level, iii, tdValue));
    }
    return result;
  }

  // filter records with incorrect score format
  static getFilterData(judgeDivision, provinceID, year, level, iii, tdValue, result) {
    if (typeof (tdValue) !== 'string') {
      return 0;
    }
    const test = 1;
    if (tdValue !== '-' && tdValue !== '' && tdValue !== ' ' && /点击查看/.test(tdValue) === false) {
      return (this.pushDataIntoArray(judgeDivision, provinceID, year, level, iii, tdValue, result));
    } return test;
  }

  // Divide art and science to the score level website
  static divideArtScience(tdValue) {
    if (tdValue === '理科') {
      return ('science');
    }
    if (tdValue === '文科') {
      return ('art');
    }
    return ('all');
  }

  static processTDValue(i, tdValue, record, map) {
    if (typeof (tdValue) !== 'string') {
      return 0;
    }
    switch (i) {
      case 0:
        record.push(parseInt(tdValue.substr(0, 4), 10));
        break;
      case 1:
        record.push(this.getProvinceId(tdValue, map));
        break;
      case 2:
        record.push(this.divideArtScience(tdValue));
        break;
      case 3:
        record.push(tdValue);
        break;
      default:
        record.push(parseInt(tdValue, 10));
    }
    return record;
  }

  static getDataOfOneTable($, result, map) {
    const sqDom = $('div.tabsContainer');
    const trs = sqDom.find('tr');
    trs.each((i, v) => {
    // Filtering the head of table
      if (i > 0) {
        let record = [];
        const tds = $(v).find('td');
        tds.each((ii, vv) => {
          if (ii < 6) {
            record = this.processTDValue(ii, $(vv).text(), record, map);
          }
        });
        result.push(record);
      }
    });
    return result;
  }
}


module.exports = Utility;
