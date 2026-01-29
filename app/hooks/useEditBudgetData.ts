import { useMutation, useQueryClient } from "@tanstack/react-query";

export type BudgetEntry = { category: string; budget: number };

async function postBudgets(data: Record<string, number>): Promise<BudgetEntry[]> {
	const res = await fetch("/api/current_budget_data", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		throw new Error("Failed to save budgets");
	}

	return res.json();
}

export function useEditBudgetData() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postBudgets,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["current_budget_data"] });
		},
	});
}
