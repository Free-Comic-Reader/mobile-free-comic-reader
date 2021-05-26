import {UpdateComicRepository} from '../../../domain/repository/comic/update-comic-repository';
import {UpdateComicUseCase} from '../../../domain/use-cases/update-comic-use-case';

class UpdateComicUseCaseLocal implements UpdateComicUseCase {
  constructor(private repository: UpdateComicRepository) {}

  async run(
    params: UpdateComicUseCase.Params,
  ): Promise<UpdateComicUseCase.Result> {
    return this.repository.update(params);
  }
}

export default UpdateComicUseCaseLocal;
