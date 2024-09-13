declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Application {
      dbClient: Db;
    }
  }
}
export {};
