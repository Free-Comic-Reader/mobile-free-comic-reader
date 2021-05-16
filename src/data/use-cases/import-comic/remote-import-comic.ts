import {ImportComicUseCase} from '../../../domain/use-cases/import-comic-use-case';
import {FileManager} from '../../protocols/file-manager';

export class RemoteImportComicUseCase implements ImportComicUseCase {
  constructor(private fileManager: FileManager) {}

  async import({filePath}: ImportComicUseCase.Params): Promise<string> {
    return this.fileManager.import({filePath});
  }
}
