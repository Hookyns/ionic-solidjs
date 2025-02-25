
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-back-button'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonBackButtonProps = FixIonProps<IonicJSX.IonBackButton> &
  JSXBase.HTMLAttributes<HTMLIonBackButtonElement>

export function IonBackButton(props: IonBackButtonProps) {
  //@ts-ignore
  return <ion-back-button {...props} />
}
