import {ImportComicUseCase} from '../../../domain/use-cases/import-comic-use-case';
import {FileManager} from '../../protocols/file-manager';
import {ComicRepository} from '../../../domain/repository/comic-repository';

class ImportComicUseCaseLocal implements ImportComicUseCase {
  constructor(
    private fileManager: FileManager,
    private comicRepository: ComicRepository,
  ) {}

  async run(filePath: string): Promise<ImportComicUseCase.ImportResult> {
    const path = await this.fileManager.import(filePath);
    const name = this.getNameFrom(path);
    const comic = await this.comicRepository.create({
      name,
      path,
    });

    return comic;
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
