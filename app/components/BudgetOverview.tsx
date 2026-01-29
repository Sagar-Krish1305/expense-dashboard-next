
import { useQuery } from "@tanstack/react-query";
import ProgressBarCard from "./ProgressBarCard";

type BudgetEntry = { category: string; budget: number };

type BudgetOverviewProps = {
  budgetData: Record<string, number>;
  onEditBudget?: () => void;
};

export default function BudgetOverview({ budgetData, onEditBudget }: BudgetOverviewProps) {
  const entries = Object.entries(budgetData ?? {});
  const hasExpenseData = entries.length > 0;

  const { data: budgetEntries = [], isPending, error, refetch } = useQuery<BudgetEntry[]>({
    queryKey: ["current_budget_data"],
    queryFn: async () => {
      const res = await fetch("/api/current_budget_data");
      console.log("Fetching this data")
      if (!res.ok) throw new Error("Failed to load budgets");
      return res.json();
    },
  });

  const budgetRecord = () => {
    const record: Record<string, number> = {};
    (budgetEntries || []).forEach(({ category, budget }) => {
      record[category] = budget ?? 0;
    });
    return record;
  }

  return (
      <div className="flex-1 bg-(--card-background) rounded-2xl flex flex-col gap-6 p-4 overflow-y-auto h-full border">
        <div className="flex items-center justify-between m-6">
          <span className="text-[1rem] font-bold text-(--light-text-color)">
            Budget Overview
          </span>
          <button
            className="h-full px-4 flex justify-center rounded hover:underline font-semibold text-(--light-text-color)"
            onClick={onEditBudget}
          >
            Edit Budget
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto min-h-0">
          {isPending ? (
            <div className="h-full w-full py-8 flex items-center justify-center text-(--muted-text)">
              Loading budgets…
            </div>
          ) : error ? (
            <div className="h-full w-full py-8 flex flex-col items-center justify-center gap-2 text-(--muted-text)">
              <span>Failed to load budgets.</span>
              <button className="underline" onClick={() => refetch()}>
                Retry
              </button>
            </div>
          ) : !hasExpenseData ? (
            <div className="h-full w-full py-8 flex items-center justify-center text-(--muted-text)">
              Add some transactions or budgets to see progress.
            </div>
          ) : (
            budgetEntries.map((entry, i) => (
              <ProgressBarCard
                key={entry.category ?? i}
                category={entry.category}
                amountSpend={budgetData?.[entry.category] ?? 0}
                budget={entry.budget ?? 0}
              />
            ))
          )}
        </div>
      </div>
    );
}
