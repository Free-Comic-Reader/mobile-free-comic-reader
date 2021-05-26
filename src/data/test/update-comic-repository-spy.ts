import {Comic} from '../../domain/model/comic';
import {UpdateComicRepository} from '../../domain/repository/comic/update-comic-repository';

class UpdateComicRepositorySpy implements UpdateComicRepository {
  params?: Comic;
  result?: Comic;
  error?: Error;

  update(params: Comic): Promise<Comic> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve({...this.result, ...params});
    } else {
      return Promise.reject(new Error('Update comic error'));
    }
  }
}

export default UpdateComicRepositorySpy;
