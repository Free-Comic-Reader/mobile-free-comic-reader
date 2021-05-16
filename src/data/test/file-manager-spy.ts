import {FileManager} from '../protocols/file-manager';

export class FileManagerSpy implements FileManager {
  importedFilePath: string = '';
  filePath?: string;
  files: string[] = [];
  error?: Error;

  import({filePath}: FileManager.ImportParams): Promise<string> {
    this.filePath = filePath;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(this.importedFilePath);
  }

  open({filePath}: FileManager.OpenParams): Promise<string[]> {
    this.filePath = filePath;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(this.files);
  }
}
