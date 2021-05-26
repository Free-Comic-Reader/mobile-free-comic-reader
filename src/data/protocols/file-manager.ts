export interface FileManager {
  import(filePath: string): Promise<string>;
  open(filePath: string): Promise<string[]>;
  storedSize(): Promise<number>;
}
