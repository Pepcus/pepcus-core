/**
 * Check if a given URL / Link is an internal THR link.
 *
 * @method isThrInternalLink
 * @param  {string}          link The link to check
 * @return {boolean}              If the link is an internal link
 */
export function isThrInternalLink(link) {
  const cleanLink = String(link).replace(/^(https?:\/\/w?w?w?\.?)/gi, ''); // Check if the cleaned link starts with `apps.thinkhr`
  // for it to be an internal link.

  return cleanLink.startsWith('apps.thinkhr');
}