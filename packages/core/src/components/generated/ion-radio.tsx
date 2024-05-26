// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-radio';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRadioProps = FixIonProps<IonicJSX.IonRadio> &
	JSXBase.HTMLAttributes<HTMLIonRadioElement>

export function IonRadio(props: IonRadioProps) {
	const [ _, rest ] = splitProps(
		props, 
		['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value']);
	const componentProps = () => ({
		'prop:alignment': props.alignment,
		'prop:color': props.color,
		'prop:disabled': props.disabled,
		'prop:justify': props.justify,
		'prop:labelPlacement': props.labelPlacement,
		'prop:mode': props.mode,
		'prop:name': props.name,
		'prop:value': props.value
	});

	return <ion-radio {...componentProps()} {...rest} />;
}
