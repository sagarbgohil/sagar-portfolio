module.exports = {
  siteUrl: "https://sagargohil.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [{ userAgent: "*", allow: "/" }],
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt + "\nContent-Signal: ai-train=no, search=yes, ai-input=yes\n",
  },
};
