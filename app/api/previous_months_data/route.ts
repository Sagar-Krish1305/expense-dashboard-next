import { PreviousMonthDataDetails } from "../../types/transaction.types"

export const previous_month_data: PreviousMonthDataDetails[] = [
    { id: "12fr", month: "Dec", income: 42000, expense: 23800 },
    { id: "a9b0", month: "Nov", income: 38500, expense: 20150 },
    { id: "e7f8", month: "Oct", income: 41000, expense: 22340 },
    { id: "c5d6", month: "Sep", income: 39500, expense: 20780 },
    { id: "a3b4", month: "Aug", income: 40200, expense: 21990 },
    { id: "e1f2", month: "Jul", income: 38800, expense: 19950 },
    { id: "c9d0", month: "Jun", income: 41500, expense: 22600 },
    { id: "a7b8", month: "May", income: 39200, expense: 20560 },
    { id: "e5f6", month: "Apr", income: 40500, expense: 21440 },
    { id: "c3d4", month: "Mar", income: 39900, expense: 20980 },
    { id: "a1b2", month: "Feb", income: 37600, expense: 19350 },
    { id: "2ee6", month: "Jan", income: 45000, expense: 5450 }
];

export async function GET(){
    return Response.json(previous_month_data);
}