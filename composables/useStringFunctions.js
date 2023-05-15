export function removePrefix(filename) {
  // Remove "-image" prefix
  filename = filename.replace(/^image-/, "");
  // Remove "-webp" suffix
  filename = filename.replace("-webp", "");

  return filename;
}
