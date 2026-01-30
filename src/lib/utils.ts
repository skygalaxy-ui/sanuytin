import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Robustly calculates the relative path from the current URL to the target path.
 * Updated to strip deployment prefix (like /landing/, /dist/) automatically to avoid "double relative" issues
 * or absolute path fallbacks.
 */
export function getRelativePath(currentPath: string, targetPath: string) {
  if (targetPath.startsWith("http") || targetPath.startsWith("mailto:") || targetPath.startsWith("tel:")) {
    return targetPath;
  }

  // Support for development environment to avoid .html 404s
  // Check process.env for Node env, and window.location for Browser env
  const isDev = (typeof process !== "undefined" && process.env.NODE_ENV === "development") ||
    (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"));

  if (isDev) {
    return targetPath;
  }

  if (targetPath.startsWith("/#") || targetPath.startsWith("#")) {
    const hash = targetPath.startsWith("/") ? targetPath.substring(1) : targetPath;
    if (targetPath.startsWith("/#") && currentPath) {
      const homePath = resolvePath(currentPath, "/");
      return `${homePath}${hash}`;
    }
    return targetPath;
  }

  return resolvePath(currentPath, targetPath);
}

function resolvePath(current: string, target: string) {
  if (!current) current = "/";

  // NORMALIZE PATH
  const currentLower = current.toLowerCase();

  // Remove index.html, trailing slash
  let normalizedCurrent = current.replace(/\/index\.html$/, "").replace(/\/$/, "");

  let effectiveCurrent = normalizedCurrent;

  if (normalizedCurrent.includes("/landing")) {
    const parts = normalizedCurrent.split("/landing");
    if (parts.length > 1) {
      effectiveCurrent = parts.pop() || "";
      if (effectiveCurrent === "") effectiveCurrent = "/";
    }
  } else if (normalizedCurrent.includes("/home")) {
    const parts = normalizedCurrent.split("/home");
    if (parts.length > 1) {
      effectiveCurrent = parts.pop() || "";
      if (effectiveCurrent === "") effectiveCurrent = "/";
    }
  }

  const stepsUp = effectiveCurrent === "/" || effectiveCurrent === ""
    ? 0
    : effectiveCurrent.split("/").filter(Boolean).length;


  // Force HOME prefix logic for subdirectory deployment via PHP wrapper
  // If effectiveCurrent is root (meaning we are at sanuytin.net/), 
  // but the 'real' URL path doesn't show /home, we need to artificially inject ./home/
  // so links go to /home/tin-tuc instead of /tin-tuc (which would 404).

  // Default prefix logic
  const prefix = stepsUp > 0 ? "../".repeat(stepsUp) : "./";

  const targetSegments = target.split("/").filter(Boolean);
  const cleanTarget = targetSegments.join("/");

  if (targetSegments.length === 0) {
    // Navigating to Home
    if (effectiveCurrent === "" || effectiveCurrent === "/") {
      return "./";
    }
    // If inside subpage, standard "../" logic works to get back to root
    return `${prefix}`;
  }

  let finalTarget = cleanTarget;
  // If target doesn't have an extension (like .html, .jpg), treat it as a directory
  if (!finalTarget.match(/\.[a-zA-Z0-9]+$/)) {
    // Ensure trailing slash for directory style links
    if (!finalTarget.endsWith("/")) {
      finalTarget += "/";
    }
  }

  return `${prefix}${finalTarget}`;
}
