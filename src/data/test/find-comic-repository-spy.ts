import {FindComicRepository} from '../../domain/repository/comic/find-comic-repository';

class FindComicRepositorySpy implements FindComicRepository {
  error?: Error;
  params?: FindComicRepository.Params;
  result?: FindComicRepository.Result;

  async find(
    params: FindComicRepository.Params,
  ): Promise<FindComicRepository.Result> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }
}

export default FindComicRepositorySpy;
