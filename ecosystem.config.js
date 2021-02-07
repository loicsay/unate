module.exports = {
  apps: [
    {
      name: "back",
      cwd: "back",
      script: "yarn",
      args: "start",
      instances: 1,
      autorestart: true,
      ignore_watch: ["node_modules"],
      watch: true,
      max_memory_restart: "1G",
    },
  ],
};
