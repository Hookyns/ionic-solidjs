
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-outlet'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonRouterOutletProps = FixIonProps<IonicJSX.IonRouterOutlet> &
  JSXBase.HTMLAttributes<HTMLIonRouterOutletElement>

export function IonRouterOutlet(props: IonRouterOutletProps) {
  //@ts-ignore
  return <ion-router-outlet {...props} />
}
