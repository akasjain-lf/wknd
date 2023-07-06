import {serveContentFromTarget} from '../../scripts/lib-franklin.js'

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  serveContentFromTarget(block);
}
