import {FindComicRepository} from '../../../domain/repository/comic/find-comic-repository';
import {FindComicUseCase} from '../../../domain/use-cases/find-comic-use-case';

class FindComicUseCaseLocal implements FindComicUseCase {
  constructor(private repository: FindComicRepository) {}

  run(params: FindComicUseCase.Params): Promise<FindComicUseCase.Result> {
    return this.repository.find(params);
  }
}

export default FindComicUseCaseLocal;
