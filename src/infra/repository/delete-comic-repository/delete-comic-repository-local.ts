import {DeleteComicRepository} from '../../../domain/repository/comic/delete-comic-repository';
import {Database} from '../../../data/protocols/database';

class DeleteComicRepositoryLocal implements DeleteComicRepository {
  private table = 'comic';

  constructor(private database: Database) {}

  deleteComic(params: DeleteComicRepository.Params): Promise<void> {
    return this.database.delete(params.id, this.table);
  }
}

export default DeleteComicRepositoryLocal;
