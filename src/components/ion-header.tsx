
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-header'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonHeaderProps = FixIonProps<IonicJSX.IonHeader> &
  JSXBase.HTMLAttributes<HTMLIonHeaderElement>

export function IonHeader(props: IonHeaderProps) {
  //@ts-ignore
  return <ion-header {...props} />
}
