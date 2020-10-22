import React from 'react'
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from '@ionic/react'

function HeightInput(props) {
    return (
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Your Height ({props.calcUnits === 'mkg' ? 'Meters' : 'Feet'})</IonLabel>
                    <IonInput type="number" ref={props.heightInputRef}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
    )
}

export {HeightInput}