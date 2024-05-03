import * as fs from 'node:fs';
import { componentList } from './component-list';

const OUT_DIR = 'src/components/generated';

function baseTemplate(component: string) {
	const componentPascelCase = component
		.split('-')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');

	return `// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/${component}'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type ${componentPascelCase}Props = FixIonProps<IonicJSX.${componentPascelCase}> &
	JSXBase.HTMLAttributes<HTML${componentPascelCase}Element>

export function ${componentPascelCase}(props: ${componentPascelCase}Props) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <${component} {...fixedProps()} />
}
`;
}

for (const component of componentList) {
	fs.writeFileSync(`${OUT_DIR}/${component}.tsx`, baseTemplate(component));
}

fs.writeFileSync(
	`${OUT_DIR}/index.ts`,
	componentList.map((component) => `export * from "./${component}";`).join('\n')
);

// Update exports for each component in package.json
// function updatePackageJsonExports() {
// 	const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
//
// 	packageJson.exports = {
// 		'./router': {
// 			import: './router.mjs',
// 			require: './router.js',
// 			default: './router.js',
// 			types: './router.d.ts',
// 		},
// 	};
//
// 	for (const component of componentList) {
// 		// CommonJS will be generated in lib/components/name.js
// 		// ES6 will be generated in lib/components/name.mjs
// 		// Types will be available at lib/components/name.d.ts
// 		packageJson.exports[`./components/${component}`] = {
// 			import: `./components/${component}.mjs`,
// 			require: `./components/${component}.js`,
// 			default: `./components/${component}.js`,
// 			types: `./components/${component}.d.ts`,
// 		};
// 	}
//
// 	for (const icon of iconList) {
// 		packageJson.exports[`./icons/${icon}`] = {
// 			import: `./icons/${icon}.mjs`,
// 			require: `./icons/${icon}.js`,
// 			default: `./icons/${icon}.js`,
// 			types: `./icons/${icon}.d.ts`,
// 		};
// 	}
//
// 	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
// }
