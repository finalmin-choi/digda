// const axios = require("axios");
// const cheerio = require("cheerio");

// const getHtml = async () => {
//   try {
//     // 1
//     const html = await axios.get("https://www.genie.co.kr/chart/top200");
//     let ulList = [];
//     // 2
//     const $ = cheerio.load(html.data);
//     // 3
//     const bodyList = $("tr.list");
//     bodyList.map((i, element) => {
//       ulList[i] = {
//         rank: i + 1,
//         // 4
//         title: $(element).find("td.info a.title").text().replace(/\s/g, ""),
//         artist: $(element).find("td.info a.artist").text().replace(/\s/g, ""),
//       };
//     });
//     console.log("bodyList : ", ulList);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getHtml();

// bodyList :  [
//     { time: "16:56", title: '오키나와에서 본 귀여운 미니 트럭', browse: 176, recomand: 3 },
// ]

// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://m.bobaedream.co.kr/board/new_writing/dica';

// axios.get(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const bodyList = [];

//         $('div.info').each((index, element) => {
//             const time = $(element).find('.txt2.block:nth-child(1)').text().trim();
//             const title = $(element).find('.txt.cont').text().trim();
//             const browse = parseInt($(element).find('.txt2.block:nth-child(2)').text().trim().replace(/[^0-9]/g, ''));
//             const recomand = parseInt($(element).find('txt2.block:nth-child(3)').text().trim().replace(/[^0-9]/g, ''));

//             bodyList.push({ time, title, browse, recomand });
//         });

//         console.log(bodyList);
//     })
//     .catch(error => {
//         console.error('Error fetching the URL:', error);
//     });



const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    // 1
    const html = await axios.get("https://m.bobaedream.co.kr/board/new_writing/dica");
    let ulList = [];
    // 2
    const $ = cheerio.load(html.data);
    // 3
    const bodyList = $("div.info");
    bodyList.map((i, element) => {
      ulList[i] = {
        rank: i + 1,
        // 4
        title: $(element).find("span.cont").text().replace(/\s/g, ""),
        link: $(element).find("a").attr('href'),
      };
    });
    console.log("bodyList : ", ulList);
  } catch (error) {
    console.error(error);
  }
};

getHtml();