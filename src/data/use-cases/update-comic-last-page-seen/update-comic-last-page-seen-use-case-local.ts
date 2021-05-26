import {UpdateComicLastPageSeenRepository} from '../../../domain/repository/comic/update-comic-last-page-seen-repository';
import {UpdateComicLastPageSeenUseCase} from '../../../domain/use-cases/update-comic-last-page-seen-use-case';

class UpdateComicLastPageSeenUseCaseLocal
  implements UpdateComicLastPageSeenUseCase
{
  constructor(private repository: UpdateComicLastPageSeenRepository) {}

  async run(
    params: UpdateComicLastPageSeenUseCase.Params,
  ): Promise<UpdateComicLastPageSeenUseCase.Result> {
    return this.repository.update(params);
  }
}

export default UpdateComicLastPageSeenUseCaseLocal;
