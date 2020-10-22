import React, { useRef, useState } from 'react';
import { IonApp, IonCol, IonContent, IonGrid, IonRow, IonAlert } from '@ionic/react';
import { BmiControls } from './components/BmiMainPage/BmiControls'
import { BmiResult } from './components/BmiMainPage/BmiResult'
import { InputControl } from './components/BmiMainPage/InputControl'
import { Header } from './components/BmiMainPage/Header'
import { WeightInput } from './components/BmiMainPage/WeightInput';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { HeightInput } from './components/BmiMainPage/HeightInput';


/* Theme variables */
// import './theme/variables.css';
// import { text } from 'ionicons/icons';

const App = () => {

  //<number> this tell tyscript what type of data type wtaht will be stored in the state/process
  const [calculatedBMI, setCalculatedBMI] = useState()
  const [error, setError] = useState('')
  const [calcUnits, setCalcUnits] = useState('mkg')


  //in typescript you have to set to which html / ionic element to use the useref and give the inital value as null 
  const weightInputRef = useRef(null)
  const heightInputRef = useRef(null)

  const calculateBMI = () => {
    // ? will check wether the value of the current element is null or not , if not null then process, otherwise will be error
    const enteredWeight = weightInputRef.current.value
    const enteredHeight = heightInputRef.current.value

    //check if not null or empty string
    if (!enteredWeight || !enteredHeight || enteredWeight <= 0 || enteredHeight <= 0) {
      setError('Please enter valid number/ non-negative number')
      return
    }

    //by adding + convert stirng to number
    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1
    const weight = enteredWeight / weightConversionFactor
    const height = enteredHeight / heightConversionFactor

    const bmi = weight / (height * height)

    //usesate change the value
    setCalculatedBMI(bmi)
    clearError()
  }
  const resetInputs = () => {
    //telling typescript it will not be null
    weightInputRef.current.value = ''
    heightInputRef.current.value = ''
  }

  const clearError = () => {
    setError('')
  }

  const selectCalcUnitHandler = (value) => {
    setCalcUnits(value)
  }

  return (
    // react.fragment allow us to warp root level element side by side like alert and app
    <React.Fragment>
      {/* the !! sign below convert string value of true or false to a true bolean type */}
      <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: clearError }]} />
      <IonApp>
        <Header />

        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
              </IonCol>
            </IonRow>


            <WeightInput calcUnits = {calcUnits} weightInputRef = {weightInputRef} />
            <HeightInput calcUnits = {calcUnits} heightInputRef = {heightInputRef}/>

            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />

            {/* code below means conditional rendering , if the calculatedBMI has value */}
            {calculatedBMI ? <BmiResult result={calculatedBMI} /> : null}

          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  )
};

export default App;

