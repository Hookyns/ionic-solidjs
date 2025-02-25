
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-checkbox'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonCheckboxProps = FixIonProps<IonicJSX.IonCheckbox> &
  JSXBase.HTMLAttributes<HTMLIonCheckboxElement>

export function IonCheckbox(props: IonCheckboxProps) {
  //@ts-ignore
  return <ion-checkbox {...props} />
}
