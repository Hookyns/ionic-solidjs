// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-card-content';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonCardContentProps = FixIonProps<IonicJSX.IonCardContent> &
	JSXBase.HTMLAttributes<HTMLIonCardContentElement>

export function IonCardContent(props: IonCardContentProps) {
	const [ _, rest ] = splitProps(
		props,
		['mode']);
	const componentProps = () => ({
		'prop:mode': props.mode
	});

	return <ion-card-content {...componentProps()} {...rest} />;
}
