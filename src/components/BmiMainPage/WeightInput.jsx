import React from 'react'
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from '@ionic/react'

function WeightInput(props) {
    return (
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Your Weight ({props.calcUnits === 'mkg' ? 'Kg' : 'lbs'})</IonLabel>
                    <IonInput type="number" ref={props.weightInputRef}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
    )
}

export { WeightInput }