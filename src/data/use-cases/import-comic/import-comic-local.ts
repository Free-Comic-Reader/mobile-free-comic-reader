import {ImportComicUseCase} from '../../../domain/use-cases/import-comic-use-case';
import {FileManager} from '../../protocols/file-manager';

class ImportComicUseCaseLocal implements ImportComicUseCase {
  constructor(private fileManager: FileManager) {}

  async run(filePath: string): Promise<ImportComicUseCase.ImportResult> {
    const path = await this.fileManager.import(filePath);
    const name = this.getNameFrom(path);

    return {
      name,
      path,
    };
  }

  private getNameFrom(filePath: string): string {
    const pieces = filePath.split('/');

    if (pieces.length === 1) {
      return pieces[0];
    }

    return pieces[pieces.length - 1];
  }
}

export default ImportComicUseCaseLocal;
