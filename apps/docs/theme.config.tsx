import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "do-stack-docks by do.dev",
  },
  primaryHue: 360,
  primarySaturation: 0,
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
};

export default config;
