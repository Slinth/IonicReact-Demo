import React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/react';

const Tab3Page: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function increment()  {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={styles.centerContainer}>
        <IonLabel><h1>{counter}</h1></IonLabel>
        <IonButton color="success" onClick={increment}>Increment</IonButton>
        <IonButton color="danger" onClick={decrement}>Decrement</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;

const styles = {
  centerContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  }
};
