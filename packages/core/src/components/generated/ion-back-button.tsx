// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-back-button'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonBackButtonProps = FixIonProps<IonicJSX.IonBackButton> &
	JSXBase.HTMLAttributes<HTMLIonBackButtonElement>

export function IonBackButton(props: IonBackButtonProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-back-button {...fixedProps()} />
}
