import {CreateComicRepository} from '../../domain/repository/comic/create-comic-repository';

class CreateComicRepositorySpy implements CreateComicRepository {
  result?: CreateComicRepository.Result;
  params?: CreateComicRepository.Params;
  error?: Error;

  createComic(
    params: CreateComicRepository.Params,
  ): Promise<CreateComicRepository.Result> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (!this.result) {
      return Promise.reject(new Error('Create Comic Error'));
    }

    return Promise.resolve(this.result);
  }
}

export default CreateComicRepositorySpy;
