import {TypeCard} from "@/shared/types/type-card.ts";

export interface Card {
    id: number
    rank: number
    type: TypeCard
    img: string
}