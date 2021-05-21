import {CreateComicRepository} from '../../../domain/repository/comic/create-comic-repository';
import {ImportComicUseCase} from '../../../domain/use-cases/import-comic-use-case';
import {FileManager} from '../../protocols/file-manager';

class ImportComicUseCaseLocal implements ImportComicUseCase {
  constructor(
    private readonly fileManager: FileManager,
    private readonly createComicRepository: CreateComicRepository,
  ) {}

  async run(
    params: ImportComicUseCase.Params,
  ): Promise<ImportComicUseCase.Response> {
    const filePath = await this.fileManager.import(params.filePath);
    const name = this.getNameFrom(filePath);
    const comic = await this.createComicRepository.createComic({
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
