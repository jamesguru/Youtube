import mssql from 'mssql';
import { sqlconfig } from "../config/config";

export default class Connection {
  private pool: Promise<mssql.ConnectionPool>;
  constructor() {
    this.pool = this.getConnection();
  }
  async getConnection(): Promise<mssql.ConnectionPool> {
    const pool = mssql.connect(sqlconfig) as Promise<mssql.ConnectionPool>;
    return pool;
  }
  createRequest(request: mssql.Request, data: { [c: string]: string }) {
    const keys = Object.keys(data);
    keys.map((keyName) => {
      const keyValue = data[keyName];

      request.input(keyName, keyValue);
    });

    return request;
  }

  async exec(procedureName: string, data: { [c: string]: string } = {}) {
    let pool = await this.pool;
    let request = (await pool.request()) as mssql.Request;

    request = this.createRequest(request, data);

    const result = await request.execute(procedureName);
    return result;
  }

  async query(query: string) {
    const results = await (await this.pool).request().query(query);
    return results;
  }
}