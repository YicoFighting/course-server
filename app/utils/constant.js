// 课程信息
const curriculums = [
  {
    title: "形势与政策(四)",
    class: "VMK01100950.08",
    classString: "22产设U1班 22数媒U2班 22数媒U4班",
    startWeek: 10,
    endWeek: 13,
    classroom: "长芗苑教10栋305",
    arrayIndex: [1, 0],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  {
    title: "形势与政策(四)",
    class: "VMK01100950.07",
    classString: "22视传U5班 22视传U7班 22视传U9班",
    startWeek: 2,
    endWeek: 5,
    classroom: "长芗苑教10栋305",
    arrayIndex: [1, 0],
    rowspan: 2,
    peopleNums: 90,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  {
    title: "形势与政策(四)",
    class: "VMK01100950.06",
    classString: "22动画U1班 22动画U3班 22视传U1班",
    startWeek: 6,
    endWeek: 9,
    classroom: "长芗苑教13栋201",
    arrayIndex: [1, 0],
    rowspan: 2,
    peopleNums: 98,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  //================================//
  {
    title: "思想道德与法治",
    class: "VMK01200103.12",
    classString: "23工技V1班 23建装V1班 23建工V1班",
    startWeek: 2,
    endWeek: 11,
    classroom: "长芗苑教13栋405",
    arrayIndex: [1, 2],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  {
    title: "思想道德与法治",
    class: "VMK01200103.12",
    classString: "23工技V1班 23建装V1班 23建工V1班",
    startWeek: 12,
    endWeek: 13,
    classroom: "长芗苑教13栋405-实践考察",
    arrayIndex: [1, 2],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  //================================//
  {
    title: "形势与政策(四)",
    class: "VMK01100950.02",
    classString: "22视传U4班 22视传U6班 22视传U8班",
    startWeek: 10,
    endWeek: 13,
    classroom: "长芗苑教13栋201",
    arrayIndex: [1, 4],
    rowspan: 2,
    peopleNums: 92,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  //================================//
  {
    title: "形势与政策(四)",
    class: "VMK01100950.01",
    classString: "22动画U2班 22视传U2班 22视传U10班",
    startWeek: 10,
    endWeek: 13,
    classroom: "长芗苑教12栋305",
    arrayIndex: [1, 6],
    rowspan: 2,
    peopleNums: 96,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  {
    title: "形势与政策(四)",
    class: "VMK01100950.03",
    classString: "22数媒U1班 22数媒U3班 22数媒U5班",
    startWeek: 14,
    endWeek: 17,
    classroom: "长芗苑教10栋301",
    arrayIndex: [1, 6],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  //================================//
  {
    title: "思想道德与法治",
    class: "VMK01200103.12",
    classString: "23工技V1班 23建装V1班 23建工V1班",
    startWeek: 2,
    endWeek: 11,
    classroom: "长芗苑教13栋302",
    arrayIndex: [2, 0],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  {
    title: "思想道德与法治",
    class: "VMK01200103.12",
    classString: "23工技V1班 23建装V1班 23建工V1班",
    startWeek: 12,
    endWeek: 13,
    classroom: "长芗苑教13栋302-实践考察",
    arrayIndex: [2, 0],
    rowspan: 2,
    peopleNums: 95,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  //================================//
  {
    title: "思想道德与法治",
    class: "VMK01200103.13",
    classString: "23法务V1班 23应用日语V1班 23商务英语V1班",
    startWeek: 2,
    endWeek: 12,
    classroom: "长芗苑教10栋303",
    arrayIndex: [2, 2],
    rowspan: 2,
    peopleNums: 80,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  {
    title: "思想道德与法治",
    class: "VMK01200103.13",
    classString: "23法务V1班 23应用日语V1班 23商务英语V1班",
    startWeek: 13,
    endWeek: 14,
    classroom: "长芗苑教10栋303-实践考察",
    arrayIndex: [2, 2],
    rowspan: 2,
    peopleNums: 80,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  {
    title: "思想道德与法治",
    class: "VMK01200103.13",
    classString: "23法务V1班 23应用日语V1班 23商务英语V1班",
    startWeek: 16,
    endWeek: 16,
    classroom: "长芗苑教10栋303-实践考察",
    arrayIndex: [2, 2],
    rowspan: 2,
    peopleNums: 80,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  //================================//
  {
    title: "形势与政策（四）",
    class: "VMK01100950.05",
    classString: "22陶设U2班 22陶设U4班 22陶设U6班",
    startWeek: 2,
    endWeek: 5,
    classroom: "长芗苑教10栋304",
    arrayIndex: [2, 4],
    rowspan: 2,
    peopleNums: 88,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  //================================//
  {
    title: "形势与政策（四）",
    class: "VMK01100950.04",
    classString: "22产设U2班 22网媒U2班 22网媒U4班",
    startWeek: 15,
    endWeek: 18,
    classroom: "长芗苑教10栋306",
    arrayIndex: [2, 6],
    rowspan: 2,
    peopleNums: 99,
    weeklyClassHours: 0.5,
    credit: 0.5,
    totalClassHours: 8,
  },
  //================================//
  {
    title: "思想道德与法治",
    class: "VMK01200103.13",
    classString: "23法务V1班 23应用日语V1班 23商务英语V1班",
    startWeek: 4,
    endWeek: 12,
    classroom: "长芗苑教11栋103",
    arrayIndex: [4, 0],
    rowspan: 2,
    peopleNums: 80,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  {
    title: "思想道德与法治",
    class: "VMK01200103.13",
    classString: "23法务V1班 23应用日语V1班 23商务英语V1班",
    startWeek: 16,
    endWeek: 16,
    classroom: "长芗苑教11栋103-实践考察",
    arrayIndex: [4, 0],
    rowspan: 2,
    peopleNums: 80,
    weeklyClassHours: 2.5,
    credit: 3,
    totalClassHours: 48,
  },
  //================================//
];

const curriculumTimes = {
  single: [
    "08:00-08:45",
    "08:55-09:40",
    "10:25-11:10",
    "11:20-12:05",
    "14:00-14:45",
    "14:55-15:40",
    "16:25-17:10",
    "17:20-18:05",
  ],
  double: [
    "08:20-09:05",
    "09:15-10:00",
    "10:35-11:20",
    "11:30-12:15",
    "14:20-15:05",
    "15:15-16:00",
    "16:35-17:20",
    "17:30-18:15",
  ],
};

// 创建数字到汉字的映射对象
const numberMap = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
};

// 补充十位数的映射
const tenMap = {
  10: "十",
  20: "二十",
  30: "三十",
  40: "四十",
};

for (let i = 9; i <= 40; i++) {
  if (!numberMap[i]) {
    // 如果没有这个数字的映射
    if (i < 20) {
      numberMap[i] = "十" + (i % 10 === 0 ? "" : numberMap[i % 10]);
    } else {
      let ten = Math.floor(i / 10) * 10;
      let unit = i % 10;
      numberMap[i] = tenMap[ten] + (unit === 0 ? "" : numberMap[unit]);
    }
  }
}

module.exports = { curriculums, numberMap, curriculumTimes };
