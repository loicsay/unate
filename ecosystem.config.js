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
    {
      name: "front",
      cwd: "front",
      script: "yarn",
      args: "start",
      instance: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
