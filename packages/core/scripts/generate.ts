import * as fs from 'node:fs';
import type { Type } from 'rttist';
import { Metadata } from '../metadata.typelib';
import { componentList } from './component-list';

const OUT_DIR = 'src/components/generated';
const IonTypesMap = new Map<string, Type>(
	Metadata.getTypes()
		.filter((t) => t.name?.startsWith('Ion'))
		.map((t) => [t.name, t])
);

function baseTemplate(component: string) {
	const componentPascelCase = component
		.split('-')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');
	const type = IonTypesMap.get(componentPascelCase);
	const propertiesNames =
		(type?.isObjectLike() && type.getProperties().map((p) => p.name.toString())) ?? [];
	const eventPropertiesNames = propertiesNames.filter((propName) => propName.startsWith('onIon'));
	const propNames = propertiesNames.filter((propName) => !eventPropertiesNames.includes(propName));

	return `// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/${component}';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type ${componentPascelCase}Props = FixIonProps<IonicJSX.${componentPascelCase}> &
	JSXBase.HTMLAttributes<HTML${componentPascelCase}Element>

export function ${componentPascelCase}(props: ${componentPascelCase}Props) {
	const [ _, rest ] = splitProps(
		props, 
		[${propNames.map((propName) => `'${propName}'`).join(', ')}]);
	const componentProps = () => ({
		${propNames.map((propName) => `'prop:${propName}': props.${propName}`).join(',\r\n\t\t')}
	});

	return <${component} {...componentProps()} {...rest} />;
}
`;
}

for (const component of componentList) {
	fs.writeFileSync(`${OUT_DIR}/${component}.tsx`, baseTemplate(component));
}

fs.writeFileSync(
	`${OUT_DIR}/index.ts`,
	// biome-ignore lint/style/useTemplate: its less readable in this particular case
	componentList.map((component) => `export * from './${component}';`).join('\r\n') + '\r\n'
);
