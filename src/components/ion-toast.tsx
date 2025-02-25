
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-toast'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonToastProps = FixIonProps<IonicJSX.IonToast> &
  JSXBase.HTMLAttributes<HTMLIonToastElement>

export function IonToast(props: IonToastProps) {
  //@ts-ignore
  return <ion-toast {...props} />
}
