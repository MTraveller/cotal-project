export const slugify = (string) =>
  // https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/slugify.md
  string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
