<template>
  <div>
    <v-layout>
      <v-main>
        <v-container fluid>
          <v-row class="fill-width">
          <v-checkbox
          v-model="filteredList"
          label="Moba"
          value="Moba"></v-checkbox>
        <v-checkbox v-model="filteredList" label="RTS" value="RTS"></v-checkbox>
        <v-checkbox v-model="filteredList" label="FPS" value="FPS"></v-checkbox>
        <v-checkbox
          v-model="filteredList"
          label="OpenWorld"
          value="OpenWorld"></v-checkbox>
        </v-row>
          <v-row>
            <v-col v-for="game in games" :key="game.id" cols="6">
              <nuxt-link :to="game.link" target="_blank">
              <v-card
                height="300"
                class="card"
                v-if="
                  filteredList.length === 0 ||
                  filteredList.includes(game.category)
                ">
                <v-row align="start">
                  <v-col class="shrink">
                    <img :src="game.img" class="gameImg" />
                  </v-col>
                  <v-col>
                    <v-card-title> {{ game.id }}</v-card-title>
                    <v-card-subtitle> {{ game.category }} </v-card-subtitle>
                    <v-card-text>{{game.description}}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import { mapStores } from "pinia";

definePageMeta({
  layout: "default",
});
export default {
  data() {
    return {
      games: [
        {
          id: "CSGO",
          category: "FPS",
          isFun: true,
          img:'csgo.jpg',
          description: "Competitive FPS game with a team of terrorists attempting to plant a bomb while the counter-terrorists try to defend the site.",
          link:'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
        },
        {
          id: "LoL",
          category: "Moba",
          isFun: true,
          img:'lol.jpg',
          description: "Worst game in the world. Never touch this garbage. Way too difficult to summarize.",
          link:'https://leagueoflegends.com/'
        },
        {
          id: "Dota 2",
          category: "Moba",
          isFun: false,
          img:'dota.jpg',
          description: "Moba so inherently bad. Naien seems to like it but I think it's too complicated to be fun.",
          link:'https://www.dota2.com/'
        },
        {
          id: "Age of Empires 3",
          category: "RTS",
          isFun: true,
          img:'ao3.jpg',
          description:"First game I ever played, one of the best RTS games out there. Gather resources, play as different civilizations.",
          link:'https://en.wikipedia.org/wiki/Age_of_Empires_III'
        },
        {
          id: "Starcraft Broodwar",
          category: "RTS",
          isFun: true,
          img:'scbw.jpg',
          description:"Second game I ever played, old competitive RTS very popular in SK.",
          link:'https://en.wikipedia.org/wiki/StarCraft:_Brood_War'
        },
        {
          id: "Starcraft 2",
          category: "RTS",
          isFun: true,
          img:'sc2.jpg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:'https://en.wikipedia.org/wiki/StarCraft_II'
        },
        {
          id: "Skyrim",
          category: "OpenWorld",
          isFun: true,
          img:'skyrim.jpeg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:'https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim'
        },
        {
          id: "Paragon",
          category: "Moba",
          isFun: true,
          img:'paragon.jpg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:''
        },
        {
          id: "Age of Empires 2",
          category: "RTS",
          isFun: true,
          img:'ao2.png',

        },
        {
          id: "Call of Duty Modern Warfare 2",
          category: "FPS",
          isFun: true,
          img:'mw2.png',

        },
        {
          id: "Witcher III",
          category: "OpenWorld",
          isFun: true,
          img:'w3.jpg',

        },
        {
          id: "Valorant",
          category: "FPS",
          isFun: false,
          img:'v.jpg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:''
        },
        {
          id: "GTA 5",
          category: "OpenWorld",
          isFun: true,
          img:'gta5.jpeg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:''
        },
        {
          id: "Red Dead Redemption 2",
          category: "OpenWorld",
          isFun: true,
          img:'rd2.jpg',
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link:''
        },
      ],
      filteredList: [],
    };
  },
  computed: {
    ...mapStores(),
  },
};
</script>

<style scoped>
.card {
  margin-top: 70px;
  padding: 10px;
}
.card:hover {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
}
.fill-width {
  overflow-x: auto;
  flex-wrap: nowrap;
  margin-top: 1in;
}
.gameImg{
max-width: 350px;
max-height: 270px;
box-sizing: border-box;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
border: 2px solid #969696;
margin: 5px;
border-radius: 25px;
}
a:link { text-decoration: none; }


a:visited { text-decoration: none; }
</style>
