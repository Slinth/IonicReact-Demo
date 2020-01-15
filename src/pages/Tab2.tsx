import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonItemSliding, IonItemOption, IonItemOptions, IonCheckbox, IonNote, IonIcon, IonListHeader, IonButton } from '@ionic/react';
import { add, heart, trash, more, archive } from 'ionicons/icons';

import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;


const Tab2: React.FC = () => {
  const [todoItems, setTodoItems] = useState(["Faire le diaporama", "Ajouter un max de meme", "Faire une démo pas trop buggée"]);

  function retirerItem(itemIndex : number) {
    setTodoItems(todoItems.filter((it, index) => (index !== itemIndex)));
  }

  function ajouterItem(item : string) {
    setTodoItems([...todoItems, item]);
  }

  function countItems() {
    return todoItems.length;
  }

  function alertItem() {
    alert("Bah alors Denis ?!");
    Toast.show({
      text: "Bah alors Denis ?!"
    });
  }

  function itemList() {
    return (
      todoItems.map((item, index) =>
        <IonItemSliding key={index}>
          <IonItemOptions side="start">
            <IonItemOption color="danger" onClick={() => alertItem()}>EH</IonItemOption>
          </IonItemOptions>
          <IonItem>
            <IonLabel>{item}</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="success" onClick={() => retirerItem(index)}>OK</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      )
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader color="primary">
            <IonLabel>{countItems()} items restants</IonLabel>
            <IonButton color="secondary" onClick={() => ajouterItem("TEST")}><IonIcon slot="icon-only" icon={add}></IonIcon></IonButton>
          </IonListHeader>

          {itemList()}
        </IonList>  

      
        <IonList>
          <IonListHeader color="tertiary">
            <IonLabel>Autres possibilités</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>

          {/* Multi-line sliding item with icon options on both sides */}
          <IonItemSliding id="item100">
            <IonItem href="#">
              <IonLabel>
                <h2>Multiple lines</h2>
                <p>And only-icon buttons</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="start">
              <IonItemOption>
                <IonIcon slot="icon-only" icon={add}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={heart}></IonIcon>
              </IonItemOption>
              <IonItemOption>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with expandable options on both sides */}
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="danger" expandable>
                Delete
              </IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonLabel>Expandable Options</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="tertiary" expandable>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon start options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Start
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="start" icon={more}></IonIcon>
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="start" icon={archive}></IonIcon>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon end options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons End
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="end" icon={more}></IonIcon>
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="end" icon={archive}></IonIcon>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon top options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Top
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="top" icon={more}></IonIcon>
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="top" icon={archive}></IonIcon>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {/* Sliding item with icon bottom options on end side */}
          <IonItemSliding>
            <IonItem>
              <IonLabel>
                Sliding Item, Icons Bottom
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption color="primary">
                <IonIcon slot="bottom" icon={more}></IonIcon>
                More
              </IonItemOption>
              <IonItemOption color="secondary">
                <IonIcon slot="bottom" icon={archive}></IonIcon>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>  
      </IonContent>
    </IonPage>
  );
};

export default Tab2;