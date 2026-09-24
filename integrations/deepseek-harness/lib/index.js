import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

export const name = 'code-cartographer-dsh';
export const PACKAGE_NAME = '@tt-a1i/code-cartographer-dsh';

export function resolveCode CartographerSkillRoot(profileBaseUrl) {
  if (!profileBaseUrl) {
    throw new Error('code-cartographer-dsh: missing DSH profile baseUrl for package resolution');
  }
  let manifestPath;
  try {
    manifestPath = createRequire(profileBaseUrl).resolve(`${PACKAGE_NAME}/package.json`);
  } catch (error) {
    throw new Error(
      `code-cartographer-dsh: cannot resolve ${PACKAGE_NAME}/package.json from the DSH profile`,
      { cause: error },
    );
  }
  return join(dirname(manifestPath), 'skills');
}
