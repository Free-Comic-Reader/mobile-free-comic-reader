import {DeleteComicRepository} from '../../../domain/repository/comic/delete-comic-repository';
import {DeleteComicUseCase} from '../../../domain/use-cases/delete-comic-use-case';

class DeleteComicUseCaseLocal implements DeleteComicUseCase {
  constructor(private repository: DeleteComicRepository) {}

  run(params: DeleteComicUseCase.Params): Promise<void> {
    return this.repository.deleteComic(params);
  }
}

export default DeleteComicUseCaseLocal;
