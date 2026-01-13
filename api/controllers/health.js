import os from "os";

export const getSystemHealth = async (req, res, next) => {
  try {
    const cpuUsage = Math.floor(Math.random() * 100); // Mocking CPU usage for now as real CPU usage requires more complex logic
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const memUsage = Math.floor(((totalMem - freeMem) / totalMem) * 100);
    const diskUsage = 45; // Mocking disk usage

    res.status(200).json({
      cpu: cpuUsage,
      memory: memUsage,
      disk: diskUsage,
    });
  } catch (err) {
    next(err);
  }
};
