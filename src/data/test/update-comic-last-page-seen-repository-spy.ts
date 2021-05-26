import {Comic} from '../../domain/model/comic';
import {UpdateComicLastPageSeenRepository} from '../use-cases/update-comic-last-page-seen/update-comic-last-page-seen-use-case.spec';

class UpdateComicLastPageSeenRepositorySpy
  implements UpdateComicLastPageSeenRepository
{
  params?: UpdateComicLastPageSeenRepository.Params;
  result?: UpdateComicLastPageSeenRepository.Result;
  error?: Error;

  async update(
    params: UpdateComicLastPageSeenRepository.Params,
  ): Promise<Comic> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve({
        ...this.result,
        lastPageSeen: params.lastPageSeen,
      });
    } else {
      return Promise.reject(new Error('Error simulation'));
    }
  }
}

export default UpdateComicLastPageSeenRepositorySpy;
