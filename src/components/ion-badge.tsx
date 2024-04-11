
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-badge'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonBadgeProps = FixIonEventCasing<IonicJSX.IonBadge> &
  JSXBase.HTMLAttributes<HTMLIonBadgeElement>

export function IonBadge(props: IonBadgeProps) {
  //@ts-ignore
  return <ion-badge {...props} />
}
