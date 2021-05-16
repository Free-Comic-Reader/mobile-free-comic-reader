import {FileManager} from '../../data/protocols/file-manager';

class ComicFileManager implements FileManager {
  import(filePath: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  open(filePath: string): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
}

export default ComicFileManager;
