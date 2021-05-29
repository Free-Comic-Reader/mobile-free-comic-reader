import {Database} from '../../../data/protocols/database';
import {ExistsComicRepository} from '../../../domain/repository/comic/exists-comic-repository';

class ExistsComicRepositoryLocal implements ExistsComicRepository {
  constructor(private database: Database) {}

  exists(params: ExistsComicRepository.Params): Promise<Boolean> {
    return this.database.exists(params.id);
  }
}

export default ExistsComicRepositoryLocal;
