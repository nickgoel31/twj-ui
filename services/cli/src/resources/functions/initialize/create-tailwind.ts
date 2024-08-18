import fs from 'fs';

import { NEXT_JAVASCRIPT_TAILWIND_CONFIG, NEXT_TYPESCRIPT_TAILWIND_CONFIG, REACT_JAVASCRIPT_TAILWIND_CONFIG, REACT_TYPESCRIPT_TAILWIND_CONFIG } from '../../../templates-code/tailwind-config.js';

export const createTailwindConfig = (filePath:string,framework: 'next' | 'react', isUsingTypescript: boolean) => {
    fs.writeFileSync(filePath, framework === "next" ? isUsingTypescript ? NEXT_TYPESCRIPT_TAILWIND_CONFIG : NEXT_JAVASCRIPT_TAILWIND_CONFIG : isUsingTypescript ? REACT_TYPESCRIPT_TAILWIND_CONFIG : REACT_JAVASCRIPT_TAILWIND_CONFIG);
}