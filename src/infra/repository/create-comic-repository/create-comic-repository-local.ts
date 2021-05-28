import {Comic} from '../../../domain/model/comic';
import {CreateComicRepository} from '../../../domain/repository/comic/create-comic-repository';
import {Database} from '../../../data/protocols/database';

class CreateComicRepositoryLocal implements CreateComicRepository {
  private table = 'comic';

  constructor(private database: Database) {}

  createComic(params: CreateComicRepository.Params): Promise<Comic> {
    return this.database.create(params, this.table);
  }
}

export default CreateComicRepositoryLocal;
