import {Comic} from '../../domain/model/comic';
import {ComicRepository} from '../../domain/repository/comic-repository';
import {Database} from '../protocols/database';

class ComicRepositoryLocal implements ComicRepository {
  private table = 'comic';

  constructor(private database: Database) {}

  async create(comic: Comic): Promise<Comic> {
    return this.database.create(comic, this.table);
  }

  async delete(comic: Comic): Promise<void> {
    return this.database.delete(comic, this.table);
  }
}

export default ComicRepositoryLocal;
