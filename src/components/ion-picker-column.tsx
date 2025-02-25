
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-picker-column'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonPickerColumnProps = FixIonProps<IonicJSX.IonPickerColumn> &
  JSXBase.HTMLAttributes<HTMLIonPickerColumnElement>

export function IonPickerColumn(props: IonPickerColumnProps) {
  //@ts-ignore
  return <ion-picker-column {...props} />
}
