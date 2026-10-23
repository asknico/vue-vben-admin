import {
  appCopyrightPreferences,
  defineOverridesPreferences,
  definePreferencesExtension,
} from '@vben/preferences';

interface PlaygroundPreferencesExtension {
  defaultVisibleRows: number;
  enableQuickActions: boolean;
  highlightTone: 'default' | 'success' | 'warning';
  reportTitle: string;
}

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    // 模式：'wide' 全屏 / 'compact' 限宽居中（要窄就用 compact）
    contentCompact: 'compact',
    // compact 模式下内容最大宽度，越小越窄；默认 1200。想更窄改成 1000 / 960
    contentCompactWidth: 1696,
    // 内容四周内边距。注意：只保留这一行即可，
    // 如果同时写 contentPaddingTop/Left/Right/Bottom，会覆盖这里的值
    contentPadding: 4,
  },
  copyright: appCopyrightPreferences,
  theme: {
    // 浅色主题时，侧边栏深色，就是截图的【深色侧边栏】
    semiDarkSidebar: true,
    // semiDarkHeader: true, // 深色顶栏，配套的,
    builtinType: 'deep-blue',
    colorPrimary: 'hsl(211 91% 39%)',
    mode: 'light',
    radius: '0.25',
    fontSize: 15,
  },
});

export type { PlaygroundPreferencesExtension };

export const preferencesExtension =
  definePreferencesExtension<PlaygroundPreferencesExtension>({
    tabLabel: 'demos.preferencesExtensionConfig.tabLabel',
    title: 'demos.preferencesExtensionConfig.title',
    fields: [
      {
        component: 'input',
        defaultValue: '',
        key: 'reportTitle',
        label: 'demos.preferencesExtensionConfig.fields.reportTitle.label',
        placeholder:
          'demos.preferencesExtensionConfig.fields.reportTitle.placeholder',
      },
      {
        component: 'number',
        componentProps: {
          max: 8,
          min: 1,
          step: 1,
        },
        defaultValue: 4,
        key: 'defaultVisibleRows',
        label:
          'demos.preferencesExtensionConfig.fields.defaultVisibleRows.label',
        tip: 'demos.preferencesExtensionConfig.fields.defaultVisibleRows.tip',
      },
      {
        component: 'switch',
        defaultValue: true,
        key: 'enableQuickActions',
        label:
          'demos.preferencesExtensionConfig.fields.enableQuickActions.label',
      },
      {
        component: 'select',
        defaultValue: 'default',
        key: 'highlightTone',
        label: 'demos.preferencesExtensionConfig.fields.highlightTone.label',
        options: [
          {
            label:
              'demos.preferencesExtensionConfig.fields.highlightTone.options.default',
            value: 'default',
          },
          {
            label:
              'demos.preferencesExtensionConfig.fields.highlightTone.options.success',
            value: 'success',
          },
          {
            label:
              'demos.preferencesExtensionConfig.fields.highlightTone.options.warning',
            value: 'warning',
          },
        ],
      },
    ],
  });
