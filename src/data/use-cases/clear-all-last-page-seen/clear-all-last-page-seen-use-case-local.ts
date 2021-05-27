import {ClearAllLastPageSeenRepository} from '../../../domain/repository/comic/clear-all-last-page-seen-repository';
import {ClearAllLastPageSeenUseCase} from '../../../domain/use-cases/clear-all-last-page-seen-use-case';

class ClearAllLastPageSeenUseCaseLocal implements ClearAllLastPageSeenUseCase {
  constructor(private repository: ClearAllLastPageSeenRepository) {}

  async run(): Promise<void> {
    return this.repository.clear();
  }
}

export default ClearAllLastPageSeenUseCaseLocal;
