import {FileManager} from '../protocols/file-manager';

class FileManagerSpy implements FileManager {
  importedFilePath: string = '';
  filePath?: string;
  files: string[] = [];
  error?: Error;

  import(filePath: string): Promise<string> {
    this.filePath = filePath;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(this.importedFilePath);
  }

  open(filePath: string): Promise<string[]> {
    this.filePath = filePath;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(this.files);
  }
}

export default FileManagerSpy;
