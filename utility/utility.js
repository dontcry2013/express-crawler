/* eslint-disable eqeqeq */
class Utility {
  static getYearCount($) {
    let yearCount = 1;
    // eslint-disable-next-line no-unused-vars
    $('#bj > div.sline.clearfix>div').each(() => {
      yearCount += 1;
    });
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
  static specialRecord(provinceID, year, level, tdValue) {
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
  static getFiltterData(judgeDivision, provinceID, year, level, iii, tdValue, result) {
    const test = 1;
    if (tdValue !== '-' && tdValue !== '' && tdValue !== ' ' && /点击查看/.test(tdValue) === false) {
      return (this.pushDataIntoArray(judgeDivision, provinceID, year, level, iii, tdValue, result));
    } return test;
  }
}


module.exports = Utility;
