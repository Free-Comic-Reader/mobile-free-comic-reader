import {Database} from '../../data/protocols/database';

class ComicDatabase implements Database {
  async create<T extends Object, R>(identifier: string, data: T): Promise<R> {
    return Promise.reject(new Error('Error on create new data'));
  }

  async update<T>(identifier: string, data: Object): Promise<T> {
    return Promise.reject(new Error(''));
  }

  async delete(identifier: string): Promise<void> {
    return Promise.reject(new Error('Error on delete data'));
  }

  async get<T extends Object>(identifier: string): Promise<T | null> {
    return Promise.reject(new Error(''));
  }

  async find<T extends Object>(query: Object | string): Promise<T[]> {
    return [];
  }

  async exists(identifier: string): Promise<Boolean> {
    return false;
  }
}

export default ComicDatabase;
