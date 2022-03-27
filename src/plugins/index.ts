import { App } from 'vue';
// element-plus 组件
import { useElementPlus } from '/@/plugins/element-plus';
// 自定义 Icon 组件
import { IconOffLine, IconOnline, IconSvg } from '/@/components/Icon';

export function setupPlugins(app: App<Element>) {
  app.use(useElementPlus);
  app.component('IconSvg', IconSvg);
  app.component('IconOffLine', IconOffLine);
  app.component('IconOnline', IconOnline);
}
