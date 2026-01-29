import { NextResponse } from "next/server";
import categoryConfig from "../../config/category.config.json";

type Budgets = Record<string, number>;
type BudgetEntry = { category: string; budget: number };

const budgets: Budgets = {
    
};

function ensureInitialized() {
	if (Object.keys(budgets).length === 0) {
		categoryConfig.AVAILABLE_EXPENSE_CATEGORIES.forEach((cat) => {
			budgets[cat] = 0;
		});
	}
}

function toResponse(): BudgetEntry[] {
	return categoryConfig.AVAILABLE_EXPENSE_CATEGORIES.map((cat) => ({
		category: cat,
		budget: budgets[cat] ?? 0,
	}));
}

function sanitizePayload(payload: unknown): Budgets {
	const result: Budgets = {};
	if (!payload || typeof payload !== "object") return result;

	categoryConfig.AVAILABLE_EXPENSE_CATEGORIES.forEach((cat) => {
		const value = (payload as Record<string, unknown>)[cat];
		if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
			result[cat] = value;
		}
	});

	return result;
}

export async function GET() {
	ensureInitialized();
	return NextResponse.json(toResponse());
}

export async function POST(request: Request) {
	ensureInitialized();
	const incoming = sanitizePayload(await request.json().catch(() => undefined));

	Object.assign(budgets, incoming);

	return NextResponse.json(toResponse(), { status: 200 });
}

export async function PUT(request: Request) {
	return POST(request);
}
