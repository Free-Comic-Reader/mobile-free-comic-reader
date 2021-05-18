import {Comic} from '../../../domain/model/comic';
import {FileManager} from '../../protocols/file-manager';

interface LoadComicContentUseCase {
  run(param: LoadComicContentUseCase.Param): Promise<string[]>;
}

export namespace LoadComicContentUseCase {
  export type Param = Pick<Comic, 'filePath'>;
}

class LoadComicContentUseCaseLocal implements LoadComicContentUseCase {
  constructor(private fileManager: FileManager) {}

  async run(param: LoadComicContentUseCase.Param): Promise<string[]> {
    return this.fileManager.open(param.filePath);
  }
}

export default LoadComicContentUseCaseLocal;
