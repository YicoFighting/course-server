const generateItem = (item) => {
  return `<div class="content-item" style="border-bottom: 1px solid #ccc;">
            <div>课程：${item.title}</div>
            <div>课程编号：${item.class}</div>
            <div>班级：<a href="https://www.course.xl-ctf.top/excel/${
              item.class
            }.xls" target="_blank" style="text-decoration: none;">22产设U1班、22数媒U2班、22数媒U4班</a></div>
            <div>起始周：${item.startWeek} ~ ${item.endWeek}</div>
            <div>教室：${item.classroom}</div>
            <div>上课时间：${item.time.join(" ")}</div>
        </div>`;
};

const generateHTML = (info) => {
  const header = `<div class="header" style="width: 100%;text-align: center;">${info.header}</div>`;
  let contentItems = ``;

  for (let index = 0; index < info.content.length; index++) {
    const item = info.content[index];
    contentItems += generateItem(item);
  }
  const content = `<div class="content">${contentItems}</div>`;
  const footer = `<div class="footer">
        <div>每日一言：${info.footer.cn}(${info.footer.en})</div>
        <div>定位：景德镇市浮梁县</div>
        <div>实时天气：${info.footer.realtime}</div>
        <div>明天天气：${info.footer.weather}</div>
        <img src="${info.footer.url}" style="width: 100%;"
            alt="每日一言配图">
    </div>`;

  return `${header}${content}${footer}`;
};

module.exports = {
  generateHTML,
};
