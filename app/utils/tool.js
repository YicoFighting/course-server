// 将第一周的起始日期设置为2024年2月26日
let firstWeekStartDate = new Date(2024, 1, 26);
let lastWeekEndDate = new Date(2024, 6, 7);

/**
 * 获取当前日期对应周 及 对应周的7个日期
 * @param {*} year 年
 * @param {*} month 月
 * @param {*} day 日
 * @returns
 */
const calculateWeekNumber = (year, month, day) => {
  // 将输入日期转换成Date对象
  let targetDate = new Date(year, month - 1, day);

  // 计算两个日期之间的时间差（毫秒数）
  let timeDiff = targetDate.getTime() - firstWeekStartDate.getTime();

  // 计算相差的天数并取整
  let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // 计算周数，向上取整
  let weekNumber = Math.ceil((dayDiff + 1) / 7);

  let daysToAdd = (weekNumber - 1) * 7; // 计算要添加的天数

  // 获取对应周的起始日期
  let startDate = new Date(firstWeekStartDate);
  startDate.setDate(startDate.getDate() + daysToAdd);

  // 创建包含七天日期的数组
  let dateArray = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = new Date(startDate);
    tempDate.setDate(tempDate.getDate() + i);
    let formattedDate = `${String(tempDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(tempDate.getDate()).padStart(2, "0")}`;
    dateArray.push(formattedDate);
  }

  return { weekNumber, dateArray };
};

/**
 * 得到年、月、日
 * @param {*} currentDate
 * @returns
 */
const obtainYear = (currentDate) => {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // 月份从0开始，需要+1
  let day = currentDate.getDate();
  return { year, month, day };
};

/**
 * 根据日期获取当前日期对应周 及 对应周的7个日期
 * @param {*} currentDate
 * @returns
 */
const getCurrentDate = async (currentDate = new Date()) => {
  const { year, month, day } = obtainYear(currentDate);
  const { weekNumber, dateArray } = await calculateWeekNumber(year, month, day);
  return { weekNumber, dateArray };
};

/**
 * 计算总周数
 * @param {*} year
 * @param {*} month
 * @param {*} day
 * @returns
 */
const getTotalWeeks = (year, month, day) => {
  // 将最后一天设为目标日期
  let targetDate = new Date(year, month - 1, day);

  // 计算两个日期之间的时间差（毫秒数）
  let timeDiff = targetDate.getTime() - firstWeekStartDate.getTime();

  // 计算相差的天数并取整
  let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // 计算周数，向上取整
  let weekNumber = Math.ceil((dayDiff + 1) / 7);

  return weekNumber;
};

/**
 * 得到总周数
 * @param {*} lastDay
 * @returns
 */
const obtainTheTotalNumberOfWeeks = (lastDay = lastWeekEndDate) => {
  const { year, month, day } = obtainYear(lastDay);
  const totalWeeks = getTotalWeeks(year, month, day);
  return totalWeeks;
};

/**
 * 修改课程数据
 * @param {*} curriculums
 * @param {*} emptyArray
 * @param {*} weekNumber
 */
const modifyCourseData = (curriculums, emptyArray, weekNumber) => {
  for (let index = 0; index < curriculums.length; index++) {
    if (
      curriculums[index].startWeek <= weekNumber &&
      weekNumber <= curriculums[index].endWeek
    ) {
      const first = curriculums[index].arrayIndex[1];
      const second = curriculums[index].arrayIndex[0];
      emptyArray[first][second] = curriculums[index];
    }
  }
};

/**
 * 得到 yyyy-mm-dd hh:mm:ss
 * @returns
 */
const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2); // 月份是从0开始的
  const day = ("0" + now.getDate()).slice(-2);
  const hour = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);
  const second = ("0" + now.getSeconds()).slice(-2);
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

/**
 * 计算某天是第几周的第几天
 * @param {Date} targetDate 目标日期
 * @returns {Object} 包含第几周和第几天的对象
 */
const calculateDayOfWeekInWeek = (targetDate) => {
  // 获取目标日期所在周的起始日期
  const { year, month, day } = obtainYear(targetDate);
  const { dateArray } = calculateWeekNumber(year, month, day);

  // 获取目标日期是所在周的第几天
  const targetDayIndex = dateArray.findIndex(
    (date) =>
      date ===
      `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  );

  // 获取目标日期所在周的周数
  const weekNumber = getTotalWeeks(year, month, day);

  return { weekNumber, dayOfWeek: targetDayIndex + 1 };
};

// // 示例用法
// const targetDate = new Date(2024, 1, 29); // 假设要查询2024年2月29日是第几周的第几天
// const { weekNumber, dayOfWeek } = calculateDayOfWeekInWeek(targetDate);
// console.log(
//   `日期 ${targetDate.toLocaleDateString()} 是第 ${weekNumber} 周的第 ${dayOfWeek} 天`
// );

module.exports = {
  firstWeekStartDate,
  lastWeekEndDate,
  getCurrentDate,
  obtainTheTotalNumberOfWeeks,
  modifyCourseData,
  getCurrentDateTime,
  calculateDayOfWeekInWeek,
};
