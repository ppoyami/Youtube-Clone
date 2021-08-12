export function parseViewCount(viewcount) {
  return viewcount.length > 4 ? viewcount.slice(0, -4) + '만' : viewcount;
}
