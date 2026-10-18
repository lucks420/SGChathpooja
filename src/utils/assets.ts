/**
 * Robust asset URL resolver compatible with local Vite dev, preview, SSR, and GitHub Pages deployments
 * (supporting custom domains, root user pages, and project subpaths).
 */
export const resolveAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slashes and relative dots (./ or /)
  const cleanPath = path.replace(/^(\.\/|\/)+/, '');
  
  // Safely extract BASE_URL without throwing if import.meta or env is undefined
  let base = './';
  try {
    if (typeof import.meta !== 'undefined' && import.meta && import.meta.env && typeof import.meta.env.BASE_URL === 'string') {
      base = import.meta.env.BASE_URL;
    }
  } catch {
    base = './';
  }

  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
