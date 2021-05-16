export interface Database {
  create<T>(data: T, database: string): Promise<T>;
  update<T>(data: T, database: string): Promise<T>;
  delete<T>(data: T, database: string): Promise<T>;
  get<T>(database: string): Promise<T | null>;
  find<T>(database: string, query: string): Promise<T[]>;
}

export namespace Database {}
