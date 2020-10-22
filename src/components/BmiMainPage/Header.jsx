import React from 'react'
import {IonHeader,IonToolbar,IonTitle} from '@ionic/react'

function Header() {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>
                    BMI Calculator
            </IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export {Header}