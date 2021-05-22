import {LoadComicsRepository} from '../../../domain/repository/comic/load-comics-repository';
import {LoadComicsUseCase} from '../../../domain/use-cases/load-comics-use-case';

class LoadComicsUseCaseLocal implements LoadComicsUseCase {
  constructor(private repository: LoadComicsRepository) {}

  async run(): Promise<LoadComicsUseCase.Result> {
    return this.repository.loadComics();
  }
}

export default LoadComicsUseCaseLocal;
