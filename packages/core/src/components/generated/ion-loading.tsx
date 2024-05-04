// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-loading'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonLoadingProps = FixIonProps<IonicJSX.IonLoading> &
	JSXBase.HTMLAttributes<HTMLIonLoadingElement>

export function IonLoading(props: IonLoadingProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-loading {...fixedProps()} />
}
