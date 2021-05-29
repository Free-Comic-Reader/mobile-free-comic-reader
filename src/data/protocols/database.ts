export interface Database {
  create<T>(identifier: string, data: Object): Promise<T>;
  update<T>(identifier: string, data: Object): Promise<T>;
  delete(identifier: string): Promise<void>;
  get<T extends Object>(identifier: string): Promise<T | null>;
  find<T extends Object>(query: Object | string): Promise<T[]>;
}
