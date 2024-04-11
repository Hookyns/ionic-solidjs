
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-chip'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonChipProps = FixIonEventCasing<IonicJSX.IonChip> &
  JSXBase.HTMLAttributes<HTMLIonChipElement>

export function IonChip(props: IonChipProps) {
  //@ts-ignore
  return <ion-chip {...props} />
}
