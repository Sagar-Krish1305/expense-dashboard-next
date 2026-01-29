import { headers } from "next/headers";
import { TransactionDetails } from "../../types/transaction.types"

export const transactions: TransactionDetails[] = [
  {
    id: "t001",
    transaction_type: "Expense",
    description: "Rent",
    amount: 18000,
    category: "Rent / Housing",
    transaction_date: "2026-01-01T08:00:00.000Z"
  },
  {
    id: "t002",
    transaction_type: "Income",
    description: "Salary",
    amount: 45000,
    category: "Salary",
    transaction_date: "2026-01-01T09:00:00.000Z"
  },
  {
    id: "t003",
    transaction_type: "Expense",
    description: "Groceries",
    amount: 3200,
    category: "Food & Groceries",
    transaction_date: "2026-01-02T10:30:00.000Z"
  },
  {
    id: "t004",
    transaction_type: "Expense",
    description: "Electricity Bill",
    amount: 2100,
    category: "Utilities",
    transaction_date: "2026-01-03T12:00:00.000Z"
  },
  {
    id: "t005",
    transaction_type: "Expense",
    description: "Internet Bill",
    amount: 1200,
    category: "Utilities",
    transaction_date: "2026-01-04T11:00:00.000Z"
  },
  {
    id: "t006",
    transaction_type: "Income",
    description: "Freelance Payment",
    amount: 15000,
    category: "Salary",
    transaction_date: "2026-01-05T18:30:00.000Z"
  },
  {
    id: "t007",
    transaction_type: "Expense",
    description: "Movie Night",
    amount: 900,
    category: "Entertainment",
    transaction_date: "2026-01-06T21:15:00.000Z"
  },
  {
    id: "t008",
    transaction_type: "Expense",
    description: "Dining Out",
    amount: 1600,
    category: "Food & Dining",
    transaction_date: "2026-01-07T20:00:00.000Z"
  },
  {
    id: "t009",
    transaction_type: "Expense",
    description: "Petrol",
    amount: 2500,
    category: "Travel",
    transaction_date: "2026-01-08T07:30:00.000Z"
  },
  {
    id: "t010",
    transaction_type: "Income",
    description: "Investment Dividend",
    amount: 6000,
    category: "Investments",
    transaction_date: "2026-01-09T10:00:00.000Z"
  },

  {
    id: "t011",
    transaction_type: "Expense",
    description: "Gym Membership",
    amount: 1500,
    category: "Health & Fitness",
    transaction_date: "2026-01-10T06:45:00.000Z"
  },
  {
    id: "t012",
    transaction_type: "Expense",
    description: "Coffee",
    amount: 300,
    category: "Food & Dining",
    transaction_date: "2026-01-10T09:15:00.000Z"
  },
  {
    id: "t013",
    transaction_type: "Expense",
    description: "Phone Bill",
    amount: 800,
    category: "Utilities",
    transaction_date: "2026-01-11T12:00:00.000Z"
  },
  {
    id: "t014",
    transaction_type: "Income",
    description: "Bonus",
    amount: 12000,
    category: "Salary",
    transaction_date: "2026-01-12T11:20:00.000Z"
  },
  {
    id: "t015",
    transaction_type: "Expense",
    description: "Clothing",
    amount: 4200,
    category: "Personal Care",
    transaction_date: "2026-01-13T16:00:00.000Z"
  },
  {
    id: "t016",
    transaction_type: "Expense",
    description: "Snacks",
    amount: 450,
    category: "Food & Dining",
    transaction_date: "2026-01-14T17:45:00.000Z"
  },
  {
    id: "t017",
    transaction_type: "Expense",
    description: "Movie Tickets",
    amount: 950,
    category: "Entertainment",
    transaction_date: "2026-01-14T21:10:00.000Z"
  },
  {
    id: "t018",
    transaction_type: "Income",
    description: "Side Project",
    amount: 8000,
    category: "Salary",
    transaction_date: "2026-01-15T19:00:00.000Z"
  },
  {
    id: "t019",
    transaction_type: "Expense",
    description: "Medicines",
    amount: 1100,
    category: "Health & Fitness",
    transaction_date: "2026-01-16T10:20:00.000Z"
  },
  {
    id: "t020",
    transaction_type: "Expense",
    description: "Cab Ride",
    amount: 600,
    category: "Travel",
    transaction_date: "2026-01-17T22:00:00.000Z"
  },

  {
    id: "t021",
    transaction_type: "Expense",
    description: "Groceries",
    amount: 2900,
    category: "Food & Groceries",
    transaction_date: "2026-01-18T09:15:00.000Z"
  },
  {
    id: "t022",
    transaction_type: "Income",
    description: "Refund",
    amount: 1200,
    category: "Other",
    transaction_date: "2026-01-18T14:00:00.000Z"
  },
  {
    id: "t023",
    transaction_type: "Expense",
    description: "Streaming Subscription",
    amount: 499,
    category: "Entertainment",
    transaction_date: "2026-01-19T08:00:00.000Z"
  },
  {
    id: "t024",
    transaction_type: "Expense",
    description: "Electricity Bill",
    amount: 2200,
    category: "Utilities",
    transaction_date: "2026-01-20T12:00:00.000Z"
  },
  {
    id: "t025",
    transaction_type: "Income",
    description: "Freelance Payment",
    amount: 18000,
    category: "Salary",
    transaction_date: "2026-01-22T18:30:00.000Z"
  },
  {
    id: "t026",
    transaction_type: "Expense",
    description: "Dining with Friends",
    amount: 2800,
    category: "Entertainment",
    transaction_date: "2026-01-23T21:00:00.000Z"
  },
  {
    id: "t027",
    transaction_type: "Expense",
    description: "Fuel",
    amount: 2400,
    category: "Travel",
    transaction_date: "2026-01-24T07:30:00.000Z"
  },
  {
    id: "t028",
    transaction_type: "Expense",
    description: "Groceries",
    amount: 3100,
    category: "Food & Groceries",
    transaction_date: "2026-01-25T09:15:00.000Z"
  },
  {
    id: "t029",
    transaction_type: "Income",
    description: "Investment Payout",
    amount: 6000,
    category: "Investments",
    transaction_date: "2026-01-26T10:00:00.000Z"
  },
  {
    id: "t030",
    transaction_type: "Expense",
    description: "Drying Stand",
    amount: 450,
    category: "Rent / Housing",
    transaction_date: "2026-01-27T10:19:10.900Z"
  },

  {
    id: "t031",
    transaction_type: "Income",
    description: "Stipend",
    amount: 45000,
    category: "Salary",
    transaction_date: "2026-01-27T10:19:23.465Z"
  },
  {
    id: "t032",
    transaction_type: "Expense",
    description: "Party Expense",
    amount: 5000,
    category: "Entertainment",
    transaction_date: "2026-01-27T13:01:46.200Z"
  },
  {
    id: "t033",
    transaction_type: "Expense",
    description: "Lunch",
    amount: 350,
    category: "Food & Dining",
    transaction_date: "2026-01-28T13:00:00.000Z"
  },
  {
    id: "t034",
    transaction_type: "Expense",
    description: "Haircut",
    amount: 400,
    category: "Personal Care",
    transaction_date: "2026-01-28T17:30:00.000Z"
  },
  {
    id: "t035",
    transaction_type: "Income",
    description: "Cashback",
    amount: 700,
    category: "Other",
    transaction_date: "2026-01-29T10:00:00.000Z"
  },
  {
    id: "t036",
    transaction_type: "Expense",
    description: "Books",
    amount: 1800,
    category: "Education",
    transaction_date: "2026-01-29T15:00:00.000Z"
  },
  {
    id: "t037",
    transaction_type: "Expense",
    description: "Coffee",
    amount: 280,
    category: "Food & Dining",
    transaction_date: "2026-01-30T09:00:00.000Z"
  },
  {
    id: "t038",
    transaction_type: "Expense",
    description: "Taxi",
    amount: 750,
    category: "Travel",
    transaction_date: "2026-01-30T22:15:00.000Z"
  },
  {
    id: "t039",
    transaction_type: "Income",
    description: "Referral Bonus",
    amount: 2000,
    category: "Other",
    transaction_date: "2026-01-31T11:00:00.000Z"
  },
  {
    id: "t040",
    transaction_type: "Expense",
    description: "Dinner",
    amount: 1200,
    category: "Food & Dining",
    transaction_date: "2026-01-31T20:30:00.000Z"
  },

  {
    id: "t041",
    transaction_type: "Expense",
    description: "Groceries",
    amount: 3000,
    category: "Food & Groceries",
    transaction_date: "2026-02-01T09:15:00.000Z"
  },
  {
    id: "t042",
    transaction_type: "Income",
    description: "Salary Advance",
    amount: 10000,
    category: "Salary",
    transaction_date: "2026-02-01T10:00:00.000Z"
  },
  {
    id: "t043",
    transaction_type: "Expense",
    description: "Water Bill",
    amount: 700,
    category: "Utilities",
    transaction_date: "2026-02-02T12:00:00.000Z"
  },
  {
    id: "t044",
    transaction_type: "Expense",
    description: "Snacks",
    amount: 500,
    category: "Food & Dining",
    transaction_date: "2026-02-02T18:00:00.000Z"
  },
  {
    id: "t045",
    transaction_type: "Income",
    description: "Stock Dividend",
    amount: 3500,
    category: "Investments",
    transaction_date: "2026-02-03T10:00:00.000Z"
  },
  {
    id: "t046",
    transaction_type: "Expense",
    description: "Movie",
    amount: 850,
    category: "Entertainment",
    transaction_date: "2026-02-03T21:00:00.000Z"
  },
  {
    id: "t047",
    transaction_type: "Expense",
    description: "Fuel",
    amount: 2600,
    category: "Travel",
    transaction_date: "2026-02-04T07:30:00.000Z"
  },
  {
    id: "t048",
    transaction_type: "Expense",
    description: "Online Course",
    amount: 5000,
    category: "Education",
    transaction_date: "2026-02-04T19:00:00.000Z"
  },
  {
    id: "t049",
    transaction_type: "Income",
    description: "Freelance Bonus",
    amount: 4000,
    category: "Salary",
    transaction_date: "2026-02-05T12:00:00.000Z"
  },
  {
    id: "t050",
    transaction_type: "Expense",
    description: "Dinner with Friends",
    amount: 2300,
    category: "Entertainment",
    transaction_date: "2026-02-05T21:30:00.000Z"
  }
];

export async function GET(){
    return Response.json(transactions);
}

export async function POST(request: Request){
    const transaction: TransactionDetails = await request.json();
    transactions.push(transaction);

    return new Response(JSON.stringify(transaction), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}