import {Comic} from '../../domain/model/comic';
import {ComicRepository} from '../../domain/repository/comic-repository';

class ComicRepositorySpy implements ComicRepository {
  comic?: Comic;
  error?: Error;

  create(comic: Comic): Promise<Comic> {
    this.comic = comic;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve(comic);
  }

  delete(comic: Comic): Promise<void> {
    this.comic = comic;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve();
  }
}

export default ComicRepositorySpy;
