// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-item-option'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonItemOptionProps = FixIonProps<IonicJSX.IonItemOption> &
	JSXBase.HTMLAttributes<HTMLIonItemOptionElement>

export function IonItemOption(props: IonItemOptionProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-item-option {...fixedProps()} />
}
