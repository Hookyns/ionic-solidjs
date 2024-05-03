// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-app'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonAppProps = FixIonProps<IonicJSX.IonApp> &
	JSXBase.HTMLAttributes<HTMLIonAppElement>

export function IonApp(props: IonAppProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-app {...fixedProps()} />
}
