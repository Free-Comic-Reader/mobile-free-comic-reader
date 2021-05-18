import {ImportComicUseCase} from '../../../domain/use-cases/import-comic-use-case';
import {FileManager} from '../../protocols/file-manager';
import {ComicRepository} from '../../../domain/repository/comic-repository';

class ImportComicUseCaseLocal implements ImportComicUseCase {
  constructor(
    private fileManager: FileManager,
    private comicRepository: ComicRepository,
  ) {}

  async run(
    param: ImportComicUseCase.Param,
  ): Promise<ImportComicUseCase.Response> {
    const filePath = await this.fileManager.import(param.filePath);
    const name = this.getNameFrom(filePath);
    const comic = await this.comicRepository.create({
      name,
      filePath,
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
