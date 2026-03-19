import { FileWithPreviewOrUrl } from '../interfaces/file.interface';

/**
 * Normalize multiple file shapes into a single image src string.
 * - string: treated as a direct URL
 * - FileWithPreview: uses `preview`
 * - FileFromApi / FileItem: uses `url`
 */
export function getFileSource(file: FileWithPreviewOrUrl): string | undefined {
  if (!file) return undefined;
  if (typeof file === 'string') return file;

  // FileWithPreview (File & { preview: string })
  const maybePreview = (file as any).preview as string | undefined;
  if (maybePreview) return maybePreview;

  const maybeUrl = (file as any).url as string | undefined;
  return maybeUrl;
}

