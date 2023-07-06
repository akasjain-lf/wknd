export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

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

export function getTargetOffer(block, parent, mbox) {
  window.adobe.target.getOffer({
         mbox: mbox,
         success: function(offer) {
           console.log(offer);
           const content = offer[0].content[0];
           var exp = content.index;
           console.log(exp);

           [...parent].forEach((row, i) => {
             exp.some(value => value === i) ? '' : row.remove();
           });

           //block.append(parent);
           //document.documentElement.style.opacity = "1";
         },
         error: function() {
           console.log("Some error occurred in Target response. Rendering default content");
           //document.documentElement.style.opacity = "1";
         }
       });
};
