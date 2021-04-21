module.exports = {
  options: {
    confKey: "config", // optional, default: 'config'
    schema: {
      type: "object",
      required: ["PORT", "DATABASE_URL"],
      properties: {
        PORT: {
          type: "string",
        },
        DATABASE_URL: {
          type: "string",
        },
      },
    },
    dotenv: {
      path: `${__dirname}/../.env`,
      debug: true,
    },
  },
};