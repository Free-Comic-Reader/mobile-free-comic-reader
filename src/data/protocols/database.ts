export interface Database {
  create<T, R>(data: T, database: string): Promise<R>;
  update<T, R>(identifier: string, data: T, database: string): Promise<R>;
  delete(identifier: string, database: string): Promise<void>;
  get<T>(identifier: string, database: string): Promise<T | null>;
  find<T>(query: object, database: string): Promise<T[]>;
}

export namespace Database {}
