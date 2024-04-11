
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-backdrop'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonBackdropProps = FixIonEventCasing<IonicJSX.IonBackdrop> &
  JSXBase.HTMLAttributes<HTMLIonBackdropElement>

export function IonBackdrop(props: IonBackdropProps) {
  //@ts-ignore
  return <ion-backdrop {...props} />
}
