import React from 'react'
import {IonRow,IonCol,IonButton,IonIcon} from '@ionic/react'
import {calculatorOutline,refreshOutline} from 'ionicons/icons'

// passing the props we also must tell typescript what type we past in
const BmiControls = props => {
    return (
        <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick = {props.onCalculate}>
                <IonIcon slot="start" icon={calculatorOutline}/>
                Calculate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton onClick = {props.onReset}>
                <IonIcon slot="start" icon={refreshOutline}/>
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
    )
}

export {BmiControls}