/**
 * Robust asset URL resolver compatible with local Vite dev, preview, and GitHub Pages deployments
 * (supporting custom domains, root user pages, and project subpaths).
 */
export const resolveAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slashes and relative dots (./ or /)
  const cleanPath = path.replace(/^(\.\/|\/)+/, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
