import {Comic} from '../../../domain/model/comic';
import {UpdateComicRepository} from '../../../domain/repository/comic/update-comic-repository';
import {UpdateComicUseCase} from '../../../domain/use-cases/update-comic-use-case';

class UpdateComicUseCaseLocal implements UpdateComicUseCase {
  constructor(private repository: UpdateComicRepository) {}

  async run(params: Comic): Promise<Comic> {
    return this.repository.update(params);
  }
}

export default UpdateComicUseCaseLocal;
