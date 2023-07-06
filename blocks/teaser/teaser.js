import {getTargetOffer} from "../../scripts/lib-franklin.js";

/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {

    var shouldUseTarget;
    var mboxName;
    var parent = block.parentElement.parentElement;
    if (parent) {
        shouldUseTarget = parent.getAttribute('data-usetarget');
        mboxName = parent.getAttribute('data-mbox');
    }

    if (shouldUseTarget && mboxName) {
        if (typeof (window.adobe) !== 'undefined' && typeof (window.adobe) !== 'undefined' && typeof (window.adobe.target) !== 'undefined') {
            getTargetOffer(block, block.children, mboxName);
            console.log('Rendering block from Target decisioning');
        } else {
            block.append(ul);
        }
    }

}
