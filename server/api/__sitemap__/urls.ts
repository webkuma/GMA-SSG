import { defineSitemapEventHandler } from '#imports';
import { fetchShortlistYear } from '@@/lib/frontendQuery'; // 根據實際路徑調整

export default defineSitemapEventHandler(async () => {
  const years = await fetchShortlistYear(); // 獲取所有年份
  const baseUrl = 'https://gma-nuxt.netlify.app'; // 替換成你的網站根網址

  return years.map(year => ({
    loc: `${baseUrl}/awards/${year}`, // 生成動態 URL
  }));
});
