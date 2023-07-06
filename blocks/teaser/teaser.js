import {serveContentFromTarget} from "../../scripts/lib-franklin.js";

/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {

    serveContentFromTarget(block);
}
