import {LoadComicsRepository} from '../../domain/repository/comic/load-comics-repository';

class LoadComicsRepositorySpy implements LoadComicsRepository {
  error?: Error;
  result?: LoadComicsRepository.Result;

  loadComics(): Promise<LoadComicsRepository.Result> {
    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Load comics error'));
    }
  }
}

export default LoadComicsRepositorySpy;
