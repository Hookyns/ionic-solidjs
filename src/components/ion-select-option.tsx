
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-select-option'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonSelectOptionProps = FixIonEventCasing<IonicJSX.IonSelectOption> &
  JSXBase.HTMLAttributes<HTMLIonSelectOptionElement>

export function IonSelectOption(props: IonSelectOptionProps) {
  //@ts-ignore
  return <ion-select-option {...props} />
}
