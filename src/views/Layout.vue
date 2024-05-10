<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="inbox" href="/inbox">
          <ion-icon :icon="fileTrayFull" />
          <ion-label>Inbox</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="import" href="/import">
          <ion-icon :icon="camera" />
          <ion-label>Import</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="saved" href="/saved">
          <ion-icon :icon="folderOpen" />
          <ion-label>Saved</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon :icon="cog" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import {
  camera,
  cog,
  folderOpen,
  fileTrayFull,
  home,
  search,
} from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      camera,
      cog,
      folderOpen,
      fileTrayFull,
      home,
      search,
    };
  },
};
</script>
