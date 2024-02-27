const axios = require("axios");
const { useCron } = require("./utils/useCron");
const { calculateDayOfWeekInWeek, modifyCourseData } = require("./utils/tool");
const { curriculums, curriculumTimes } = require("./utils/constant");
const { generateHTML } = require("./utils/generateHTML");

let test = false;

const main = async () => {
  try {
    // const targetDate = new Date(2024, 3, 30); // 假设要查询2024年2月29日是第几周的第几天

    // 得到明天的时间
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // 将日期加一天

    // 得到明天的所属周 及 第几天
    const { weekNumber, dayOfWeek } = calculateDayOfWeekInWeek(targetDate);

    const comparisonTable = {
      1: "周一",
      2: "周二",
      3: "周三",
      4: "周四",
      5: "周五",
      6: "周六",
      7: "周日",
    };

    // 头部字符串
    const header = `日期 ${targetDate.toLocaleDateString()} 是第 ${weekNumber} 周的${
      comparisonTable[dayOfWeek]
    }`;

    // 计算出来的课程数据
    let emptyArray = new Array(8).fill().map(() => new Array(7));

    // 修改课程数据
    await modifyCourseData(curriculums, emptyArray, weekNumber);

    const info = [];

    for (let index = 0; index < emptyArray.length; index++) {
      // 得到当天的有效数据
      const element = emptyArray[index][dayOfWeek - 1];
      if (element) {
        // 正则匹配
        const regex = /教(\d+)/;
        const match = element.classroom.match(regex);
        if (match) {
          // 替换时间
          const times = match[1] % 2 === 0 ? "double" : "single";
          const index = element.arrayIndex[1];
          element.time = [
            curriculumTimes[times][index],
            curriculumTimes[times][index + 1],
          ];
        }
        // 加上时间
        if (element.arrayIndex[1] === 0) {
          element.time[0] = `第一节(${element.time[0]})`;
          element.time[1] = `第二节(${element.time[1]})`;
        } else if (element.arrayIndex[1] === 2) {
          element.time[0] = `第三节(${element.time[0]})`;
          element.time[1] = `第四节(${element.time[1]})`;
        } else if (element.arrayIndex[1] === 4) {
          element.time[0] = `第五节(${element.time[0]})`;
          element.time[1] = `第六节(${element.time[1]})`;
        } else if (element.arrayIndex[1] === 6) {
          element.time[0] = `第七节(${element.time[0]})`;
          element.time[1] = `第八节(${element.time[1]})`;
        }
        info.push(element);
      }
    }

    // 每日一言
    const { data } = await axios.get("https://open.iciba.com/dsapi/");

    // 天气预报
    const weather = await axios.get(
      "https://aider.meizu.com/app/weather/listWeather?cityIds=101240803"
    );

    // 用于生成html的数据
    const htmlInfo = {
      header,
      content: info,
      footer: {
        cn: data.note,
        en: data.content,
        url: data.picture4,
        realtime: weather.data.value[0].realtime.weather,
        weather: weather.data.value[0].weathers[1].weather,
      },
    };

    const sendContent = generateHTML(htmlInfo);

    if (htmlInfo.content.length > 0 || !test) {
      test = true;
      const url = "http://www.pushplus.plus/send"; // 替换成你的目标URL
      const dataToSend = {
        token: "d79b2f864c4e4799aac3ed0c12a1ce4e",
        title: "明日课程提醒",
        content: sendContent,
        topic: "0328",
      };
      await axios.post(url, dataToSend);
    }
  } catch (error) {
    console.error("发送请求时出错 =>> ", error.message);
  }
};
// 默认运行一次
main();
useCron(main);
