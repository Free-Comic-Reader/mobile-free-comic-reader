import {Database} from '../../data/protocols/database';

class DatabaseSpy implements Database {
  identifier?: string;
  query?: object;
  database?: string;
  data?: any;
  result?: any;
  error?: Error;

  create<T, R>(data: T, database: string): Promise<R> {
    this.data = data;
    this.database = database;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }

  update<T, R>(identifier: string, data: T, database: string): Promise<R> {
    this.identifier = identifier;
    this.data = data;
    this.database = database;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }

  delete(identifier: string, database: string): Promise<void> {
    this.identifier = identifier;
    this.database = database;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve();
  }

  get<T>(identifier: string, database: string): Promise<T | null> {
    this.identifier = identifier;
    this.database = database;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }

  find<T>(query: object, database: string): Promise<T[]> {
    this.query = query;
    this.database = database;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }
}

export default DatabaseSpy;
