import {ref} from "vue";
import {defineStore} from "pinia";
import {Card} from "@/entities/card";
import {TypeCard} from "@/shared/const/type-card.ts";
import { cards  as allCards } from "@/entities/card"
export const usGameStore = defineStore("features/game", ()=>{
    const trumpCard = ref<TypeCard>(TypeCard.bubi) // козырь игры
    const isMyStep = ref<boolean>(false) // чей ход
    const isGetCard = ref<boolean>(false) // взял ли кто то карту
    const isMyAttack = ref<boolean>(false) //
    const deskCards = ref<Card[]>([]) // карты в  колоде
    const attackCard = ref<Card>(allCards[0])
})