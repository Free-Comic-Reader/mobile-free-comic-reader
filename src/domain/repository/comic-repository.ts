import {Comic} from '../model/comic';

export interface ComicRepository {
  create(comic: Comic): Promise<Comic>;
  delete(comic: Comic): Promise<void>;
}
