import fs from 'fs';

import { CSS_STYLE_VARIABLES } from '../../../templates-code/css.js';

export const createCSSFile = (filePath:string) => {
    fs.writeFileSync(filePath, CSS_STYLE_VARIABLES)
}