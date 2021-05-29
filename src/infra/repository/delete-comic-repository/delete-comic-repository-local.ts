import {DeleteComicRepository} from '../../../domain/repository/comic/delete-comic-repository';
import {Database} from '../../../data/protocols/database';

class DeleteComicRepositoryLocal implements DeleteComicRepository {
  constructor(private database: Database) {}

  deleteComic(params: DeleteComicRepository.Params): Promise<void> {
    return this.database.delete(params.id);
  }
}

export default DeleteComicRepositoryLocal;
