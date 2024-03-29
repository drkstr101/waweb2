import { posix } from 'path';

export function urlPathFromFilePath(filePath) {
  const pathObject = posix.parse(filePath);
  const parts = pathObject.dir.split(posix.sep).filter(Boolean);
  if (pathObject.name !== 'index') {
    parts.push(pathObject.name);
  }
  const urlPath = parts.join('/').toLowerCase();
  return '/' + urlPath;
}

export function cssClassesFromUrlPath(urlPath) {
  const parts = urlPath
    .replace(/^\/|\/$/g, '')
    .split('/')
    .filter(Boolean);

  let css = 'page';
  return parts.map((part) => {
    css += `-${part}`;
    return css;
  });
}

export function cssClassesFromFilePath(filePath) {
  const pathObject = posix.parse(filePath);
  const parts = pathObject.dir.split(posix.sep).filter(Boolean);
  parts.push(pathObject.name);

  let css = 'page';
  return parts.map((part) => {
    css += `-${part}`;
    return css;
  });
}

export function flattenMarkdownData() {
  return ({ data }) => {
    const objects = data.objects.map((object) => {
      if ('frontmatter' in object) {
        return {
          __metadata: object.__metadata,
          ...object.frontmatter,
          markdown_content: object.markdown || null
        };
      }
      return object;
    });

    return {
      ...data,
      objects
    };
  };
}

export function setEnvironmentVariables() {
  return {
    ...(process?.env?.['URL'] && { URL: process.env['URL'] })
  };
}
