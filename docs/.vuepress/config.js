module.exports = {
  title: "ZenUML Docs",
  description:
    "ZenUML is a sophisticated software modeler aimed to support agile and concise modeling with sequence diagrams.",
  themeConfig: {
    nav: [
      { text: "Home", link: "https://zenuml.com/" },
      {
        text: "Lite",
        link: "https://app.zenuml.com/?src=docs",
      },
      {
        text: "Demo",
        link:
          "https://zenuml-demo.atlassian.net/wiki/spaces/DEMO/overview?src=docs",
      },
      {
        text: "Try ZenUML",
        link:
          "https://marketplace.atlassian.com/apps/1218380/zenuml-diagrams-for-confluence-freemium?src=doc",
      },
    ],
    sidebar: ["/", "/get-started", "syntax", "ecosystem", "comparison"],
    docsRepo: "ThaddeusJiang/docs.zenuml.com",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Help us improve this page!",
  },
};
