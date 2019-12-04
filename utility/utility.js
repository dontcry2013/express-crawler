/* eslint-disable eqeqeq */
class Utility {
  static getYearCount($, lastyear) {
    let yearCount;
    // eslint-disable-next-line no-unused-vars
    let year = $('#bj > div.sline.clearfix > div.year.mtf_0.act').text();
    year = parseInt(year.substr(0, year.length - 1), 10);
    if (year !== lastyear) {
      yearCount = 2;
    } else {
      yearCount = 7;
    }
    return yearCount;
  }

  // get the province ID
  static getProvinceId(provinceName, map) {
    const cityValue = /市/;
    const provinceValue = /省/;
    if (cityValue.test(provinceName) || provinceValue.test(provinceName)) {
      throw new Error('format error');
    }
    return map[provinceName];
  }

  // Get the year and convert it be an int type
  static getYear($, j) {
    let year = $(`#bj>div.sline.clearfix > div:nth-child(${j})`).text();
    year = parseInt(year.substr(0, year.length - 1), 10);
    return year;
  }

  // Get data that does not have a liberal arts section
  static specialRecord(provinceID, year, level, tdsValue) {
    const record = [];
    const score = parseInt(tdsValue.substr(0, 3), 10);
    record.push(provinceID);
    record.push(year);
    record.push(score);
    // If td is the second column in tr, it is liberal arts
    record.push('all');
    record.push(level);
    return record;
  }

  // 获取分科的数据
  static recordScore(provinceID, year, level, iii, tdsValue) {
    const score = parseInt(tdsValue.substr(0, 3), 10);
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
  static pushDataIntoArray(j, provinceID, year, level, iii, tdsValue, result) {
    // special treatment of 2019-2017 Shanghai and zhejiang scores
    if (j < 4 && (provinceID == '25' || provinceID == '35')) {
      // clean up the useless data in the tables of Shanghai and Zhejiang
      if (tdsValue != '分数线' && tdsValue != '综合') {
        // stores each piece of data in an array
        result.push(this.specialRecord(provinceID, year, level, tdsValue));
      }
    } else {
      // get a grade and a liberal arts (science) subject for the year of the city
      result.push(this.recordScore(provinceID, year, level, iii, tdsValue));
    }
    return result;
  }

  // filter records with incorrect score format
  static getFiltterData(j, provinceID, year, level, iii, tdsValue, result) {
    const test = 1;
    if (tdsValue !== '-' && tdsValue !== '' && tdsValue !== ' ' && /点击查看/.test(tdsValue) === false) {
      return (this.pushDataIntoArray(j, provinceID, year, level, iii, tdsValue, result));
    } return test;
  }
}


module.exports = Utility;
