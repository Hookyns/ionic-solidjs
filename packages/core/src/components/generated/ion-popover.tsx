// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-popover'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonPopoverProps = FixIonProps<IonicJSX.IonPopover> &
	JSXBase.HTMLAttributes<HTMLIonPopoverElement>

export function IonPopover(props: IonPopoverProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-popover {...fixedProps()} />
}
