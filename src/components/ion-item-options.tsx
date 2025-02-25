
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-item-options'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonItemOptionsProps = FixIonProps<IonicJSX.IonItemOptions> &
  JSXBase.HTMLAttributes<HTMLIonItemOptionsElement>

export function IonItemOptions(props: IonItemOptionsProps) {
  //@ts-ignore
  return <ion-item-options {...props} />
}
