// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-toolbar'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonToolbarProps = FixIonProps<IonicJSX.IonToolbar> &
	JSXBase.HTMLAttributes<HTMLIonToolbarElement>

export function IonToolbar(props: IonToolbarProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-toolbar {...fixedProps()} />
}
