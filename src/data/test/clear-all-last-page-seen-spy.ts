import {ClearAllLastPageSeenRepository} from '../../domain/repository/comic/clear-all-last-page-seen-repository';

class ClearAllLastPageSeenRepositorySpy
  implements ClearAllLastPageSeenRepository
{
  error?: Error;

  clear(): Promise<void> {
    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve();
  }
}

export default ClearAllLastPageSeenRepositorySpy;
