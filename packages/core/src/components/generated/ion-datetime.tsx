// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-datetime'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonDatetimeProps = FixIonProps<IonicJSX.IonDatetime> &
	JSXBase.HTMLAttributes<HTMLIonDatetimeElement>

export function IonDatetime(props: IonDatetimeProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-datetime {...fixedProps()} />
}
