import {computed, ref} from "vue";
import {defineStore} from "pinia";
import {Card, cards as allCards} from "@/entities/card";
import {TypeCard} from "@/shared/const/type-card.ts";

export const usGameStore = defineStore("features/game", ()=>{
    const trumpCard = ref<TypeCard>(TypeCard.bubi) // козырь игры
    const isMyStep = ref<boolean>(false) // чей ход
    const isGetCard = ref<boolean>(false) // взял ли кто то карту
    const isMyAttack = ref<boolean>(false) //
    const deskCards = ref<Card[]>([]) // карты в  колоде
    const attackCard = ref<Card>(allCards[0])

    const toggleStep = ()=>{
        isMyStep.value = ! isMyStep.value
    }
    const toggleAttack = ()=>{
        isMyAttack.value != isMyAttack.value
    }
    const setIsGetCard = (isGetCardPlayer: boolean)=>{
            isGetCard.value = isGetCardPlayer
    }

    const defineStep = (myCards: Card[], hisCards: Card[])=>{
            const myJuniorTrumpRank = defineJuniorTrumpCard(myCards)
            const hisJuniorTrumpRank = defineJuniorTrumpCard(hisCards)
        if(myJuniorTrumpRank){
            if((myJuniorTrumpRank < hisJuniorTrumpRank) || !hisJuniorTrumpRank) {
                toggleStep()
                toggleAttack()
            }
        }

    }
    const mixDeck = ()=>{
        deskCards.value = deskCards.value.sort(()=> Math.random() - 0.5)
        trumpCard.value = deskCards.value[35].type
    }

    const startGame = ()=>{
        deskCards.value = allCards
        mixDeck()
        const firstHisCards = reduceCards(6)
        const firstMyCards = reduceCards(6)
        defineStep(firstMyCards, firstHisCards)
        return {
            firstHisCards,
            firstMyCards,
        }
    }
    const setAttackCard = (card: Card)=>{
        attackCard.value = card
    }
    const addPlayersCards = (my: any, his: any)=>{

    }
    const defineJuniorTrumpCard = (cards: Card[]) => {
        const trumpRanks = cards.filter(card => card.type === trumpCard.value)
            .map(card => card.rank)

        if (trumpRanks.length) {
            return Math.min(...trumpRanks)
        }

        return 0
    }
    // уменьшает состояние колоды
    const reduceCards = (countCards: number): Card[] => {
        return deskCards.value.splice(0, countCards);
    };
    return {
        attackCard,
    }
})