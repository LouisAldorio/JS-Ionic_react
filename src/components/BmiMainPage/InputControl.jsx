import React from 'react'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'

const InputControl = props => {

    const inputChangeHandler = (event) => {
        props.onSelectValue(event.detail.value)
    }

    return (
        <IonSegment value={props.selectedValue} onIonChange = {inputChangeHandler}>

            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>

        </IonSegment>
    )
}
export {InputControl}