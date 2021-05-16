export interface FileManager {
  import({filePath}: FileManager.ImportParams): Promise<string>;
  open({filePath}: FileManager.OpenParams): Promise<string[]>;
}

export namespace FileManager {
  export type ImportParams = {
    filePath: string;
  };

  export type OpenParams = Pick<ImportParams, 'filePath'>;
}
