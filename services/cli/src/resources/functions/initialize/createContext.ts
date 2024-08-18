import fs from "fs"
import path from "path"
import { getDirectory } from "../../../index.js";
import { NEXT__JAVASCRIPT_UI_THEME_CONTEXT, NEXT__TYPESCRIPT_UI_THEME_CONTEXT, REACT__JAVASCRIPT_UI_THEME_CONTEXT, REACT__TYPESCRIPT_UI_THEME_CONTEXT } from "../../../templates-code/context.js";

export const createContextFile = (framework: string, contextPath: string, isUsingTypescript: boolean) => {
    fs.writeFileSync(path.join(contextPath, isUsingTypescript ? 'ui-theme.ts' : 'ui-theme.js'), framework === 'next' ? isUsingTypescript ? NEXT__TYPESCRIPT_UI_THEME_CONTEXT : NEXT__JAVASCRIPT_UI_THEME_CONTEXT : isUsingTypescript ? REACT__TYPESCRIPT_UI_THEME_CONTEXT : REACT__JAVASCRIPT_UI_THEME_CONTEXT);
}