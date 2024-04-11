
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-tab-button'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonTabButtonProps = FixIonEventCasing<IonicJSX.IonTabButton> &
  JSXBase.HTMLAttributes<HTMLIonTabButtonElement>

export function IonTabButton(props: IonTabButtonProps) {
  //@ts-ignore
  return <ion-tab-button {...props} />
}
