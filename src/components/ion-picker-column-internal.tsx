
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-picker-column-internal'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonPickerColumnInternalProps = FixIonEventCasing<IonicJSX.IonPickerColumnInternal> &
  JSXBase.HTMLAttributes<HTMLIonPickerColumnInternalElement>

export function IonPickerColumnInternal(props: IonPickerColumnInternalProps) {
  //@ts-ignore
  return <ion-picker-column-internal {...props} />
}
