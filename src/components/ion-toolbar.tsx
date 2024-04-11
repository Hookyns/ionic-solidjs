
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-toolbar'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonToolbarProps = FixIonEventCasing<IonicJSX.IonToolbar> &
  JSXBase.HTMLAttributes<HTMLIonToolbarElement>

export function IonToolbar(props: IonToolbarProps) {
  //@ts-ignore
  return <ion-toolbar {...props} />
}
