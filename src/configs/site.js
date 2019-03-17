const config = {
    // about top page.
    subname: "サブタイトル",
    name: "タイトル。SEO対策。",
    description: "アプリケーション概要を記入すること。SEO対策。",
    searchAriaLabel: "検索のARIA-LABELを記入すること。",
    searchDescription: "アイテムを検索しましょう。",
    searchPlaceholder: "アイテムを検索しましょう。",
    // for items.
    getItemSubtitle: (item) => `アイテムのサブタイトル`,
    getItemDescription: (item) => `アイテムの概要`,
    toItemDetailButton: "詳細",
    getItemSearchDescription: (item) => `${config.getItemSubtitle(item)}, ${config.getItemDescription(item)}`,
    // render
    getRenderItems: (groups, index, items, favorites) => {
      const group = groups[index];
      console.log('group:', group);
      if (!group || "top" === group.path.toLowerCase()) return items;
      // favorite
      if ("favorite" === group.path.toLowerCase()) {
        const result = items.filter(item => favorites[item.id]);
        return result;
      }
      const value = group.name || group.path;
      console.log('value:', value);
      const result = items.filter(item => item.brand && item.brand.indexOf(value) >= 0);
      return result;
    },
    getGrouppathToIndex: (groups, grouppath) => {
      const index = groups.findIndex(group => group.path.toLowerCase() === grouppath);
      return Math.max(index, 0);
    },
    getIndexToGrouppath: (groups, index) => {
      const { path } = groups[index];
      return (path.toLowerCase() !== 'top') ? path.toLowerCase() : null;
    },
    getGrouppaths: (groups) => {
      return groups.map(group => group.path);
    },

    // about detail page.
    itemDetailSiteTitle: "サイト詳細のタイトル",
    getItemDetailDescription: item => {
        const result1 = `最終更新日：${new Date(item.timestamp).toLocaleDateString('ja-JP')}`;
        const result2 = `アイテム詳細の概要を記入してください。`;
        return [{text:result1, variant: "h6"}, {text:result2, variant: "h4"}];
    },
    getItemDetailSiteMain: (item, site) => `サイトメイン`,
    // WARN: IEではNumber.parseIntなし
    getItemDetailSiteDescription: (item, site) => `サイト詳細`,
    itemDetailSiteActionButton: "アイテム詳細アクション",
    // for SEO
    getItemTitle: item => `${config.name}: アイテム詳細のタイトル。SEO対策。`,
    getItemDetailMetaDescription: item => {
        return `アイテム概要を記入すること。SEO対策。`;
    },

    // url of items json
    itemsUrl: "https://example.com/latest.json",
    // url of web site.
    url: "https://example.com",

    // schema for SEO.
    getSchemaJson: (timestamp) => {
        return {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": `${config.url}`,
            "dateModified": `${new Date(timestamp || Date.now()).toISOString().split('T')[0]}`
        };
    },
    getItemDetailSchemaJson: (item) => {
        return [
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": `${config.url}`,
              "dateModified": `${new Date(item.timestamp).toISOString().split('T')[0]}`
            },
        ];
    },
};

export default config;
