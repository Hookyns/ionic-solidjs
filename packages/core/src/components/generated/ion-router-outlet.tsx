// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-outlet';
import { fixProps } from '../../utils/fixProps';
import type { JSX as IonicJSX } from '@ionic/core';
import type { JSX as JSXBase } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRouterOutletProps = FixIonProps<IonicJSX.IonRouterOutlet> &
	JSXBase.HTMLAttributes<HTMLIonRouterOutletElement>;

export function IonRouterOutlet(props: IonRouterOutletProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-router-outlet {...fixedProps()} />;
}
