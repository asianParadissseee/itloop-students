import {TypeCard} from "@/shared/const/type-card.ts";

export interface Card {
    id: number
    rank: number
    type: TypeCard
    img: string
}