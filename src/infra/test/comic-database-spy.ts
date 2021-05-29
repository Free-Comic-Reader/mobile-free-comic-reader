import {Database} from '../../data/protocols/database';

class ComicDatabaseSpy implements Database {
  identifier?: string;
  query?: string | Object;
  data?: Object;
  result?: any;
  error?: Error;

  create<T>(identifier: string, data: Object): Promise<T> {
    this.identifier = identifier;
    this.data = data;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    }

    return Promise.reject(new Error('Result not implemented.'));
  }

  update<T>(identifier: string, data: Object): Promise<T> {
    this.identifier = identifier;
    this.data = data;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    }

    return Promise.reject(new Error('Result not implemented.'));
  }

  delete(identifier: string): Promise<void> {
    this.identifier = identifier;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(this.result);
  }

  get<T extends Object>(identifier: string): Promise<T | null> {
    this.identifier = identifier;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    }

    return Promise.reject(new Error('Result not implemented.'));
  }

  find<T extends Object>(query: string | Object): Promise<T[]> {
    this.query = query;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    }

    return Promise.reject(new Error('Result not implemented.'));
  }

  async exists(identifier: string): Promise<Boolean> {
    this.identifier = identifier;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return this.result ?? false;
  }
}

export default ComicDatabaseSpy;
