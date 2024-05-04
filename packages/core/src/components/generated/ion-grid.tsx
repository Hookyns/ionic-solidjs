// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-grid'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonGridProps = FixIonProps<IonicJSX.IonGrid> &
	JSXBase.HTMLAttributes<HTMLIonGridElement>

export function IonGrid(props: IonGridProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-grid {...fixedProps()} />
}
