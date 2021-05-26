import {FileManager} from '../protocols/file-manager';

class FileManagerSpy implements FileManager {
  importedFilePath: string = '';
  filePath?: string;
  files: string[] = [];
  error?: Error;
  size?: number;

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

  storedSize(): Promise<number> {
    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.size) {
      return Promise.resolve(this.size);
    } else {
      return Promise.reject(new Error('Simulation Error'));
    }
  }
}

export default FileManagerSpy;
