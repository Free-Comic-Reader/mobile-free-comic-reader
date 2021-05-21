export interface Database {
  create<T, R>(data: T, database: string): Promise<R>;
  update<T, R>(data: T, database: string): Promise<R>;
  delete<T>(data: T, database: string): Promise<void>;
  get<T>(database: string): Promise<T | null>;
  find<T>(database: string, query: string): Promise<T[]>;
}

export namespace Database {}
