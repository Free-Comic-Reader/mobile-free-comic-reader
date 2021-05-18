import {LoadComicContentUseCase} from '../../../domain/use-cases/load-comic-content-use-case';
import {FileManager} from '../../protocols/file-manager';

class LoadComicContentUseCaseLocal implements LoadComicContentUseCase {
  constructor(private fileManager: FileManager) {}

  async run(param: LoadComicContentUseCase.Params): Promise<string[]> {
    return this.fileManager.open(param.filePath);
  }
}

export default LoadComicContentUseCaseLocal;
