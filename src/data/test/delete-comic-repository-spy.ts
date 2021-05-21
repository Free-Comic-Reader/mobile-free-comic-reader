import {DeleteComicRepository} from '../../domain/repository/comic/delete-comic-repository';

class DeleteComicRepositorySpy implements DeleteComicRepository {
  params?: DeleteComicRepository.Params;
  error?: Error;

  deleteComic(params: DeleteComicRepository.Params): Promise<void> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve();
  }
}

export default DeleteComicRepositorySpy;
