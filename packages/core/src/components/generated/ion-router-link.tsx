// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-link';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRouterLinkProps = FixIonProps<IonicJSX.IonRouterLink> &
	JSXBase.HTMLAttributes<HTMLIonRouterLinkElement>

export function IonRouterLink(props: IonRouterLinkProps) {
	const [ _, rest ] = splitProps(
		props, 
		['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:href': props.href,
		'prop:rel': props.rel,
		'prop:routerAnimation': props.routerAnimation,
		'prop:routerDirection': props.routerDirection,
		'prop:target': props.target
	});

	return <ion-router-link {...componentProps()} {...rest} />;
}
