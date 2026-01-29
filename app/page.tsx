"use client"
import { PiggyBank, Sun, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import SummaryCard from './components/SummaryCard';
import { useEffect, useState } from 'react';
import AddTransactionModal from './components/modals/AddTransactionModal';
import RecentTransactions from './components/RecentTransactions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import BudgetOverview from './components/BudgetOverview';
import categoryConfig from './config/category.config.json'
import { useTheme } from './context/ThemeContext';
import IncomeVSExpense from './components/IncomeVSExpense';
import ExpenseByCategory from './components/ExpenseByCategory';
import EditTransactionModal from './components/modals/EditTransactionModal';
import { TransactionDetails } from './types/transaction.types';
import EditBudgetModal from './components/modals/EditBudgetModal';
import { useEditBudgetData, BudgetEntry } from './hooks/useEditBudgetData';

function DashboardLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-lg">
      Loading dashboard…
    </div>
  );
}

function DashboardError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <span className="text-red-600 text-lg">
        Failed to load dashboard data
      </span>
      <button
        onClick={onRetry}
        className="px-4 py-2 border rounded-lg hover:bg-neutral-100"
      >
        Retry
      </button>
    </div>
  );
}

function Home() {
  const {
    data: transactionData = [],
    isPending,
    error,
    refetch,
  } = useQuery<TransactionDetails[]>({
    queryKey: ['transactions'],
    queryFn: async () => {
      await new Promise<void>((resolve) =>
        setTimeout(resolve, 1000)
      );
      const res = await axios.get( '/api/transactions' );
      return res.data;
    },
  });


  const theme = useTheme();

  const getBudgetData = (transactionData: TransactionDetails[]) => {
    const result: Record<string, number> = {};
    const categories = [
      ...categoryConfig.AVAILABLE_EXPENSE_CATEGORIES,
    ];

    transactionData.forEach((transaction) => {
      categories.forEach((category) => {
        if (transaction.category === category) {
          if (!result[category]) result[category] = 0;
          result[category] += transaction.amount;
        }
      });
    });
    return result;
  };

  const getTotalIncome = (transactionData: TransactionDetails[]) => {
    return transactionData
      .filter((transaction) => transaction.transaction_type === 'Income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  };


  const getTotalExpense = (transactionData: TransactionDetails[]) => {
    return transactionData
      .filter((transaction) => transaction.transaction_type === 'Expense')
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const getTotalSavings = () => 0;
  
  const getTotalBalance = (transactionData: TransactionDetails[]) => {
    return getTotalIncome(transactionData) - getTotalExpense(transactionData);
  };

  const getExpenseByCategoryData = (transactionData: TransactionDetails[]) => {
    const totals: Record<string, number> = {};
    categoryConfig.AVAILABLE_EXPENSE_CATEGORIES.forEach((cat) => {
      totals[cat] = 0;
    });

    transactionData
      .filter((tx) => tx.transaction_type === 'Expense')
      .forEach((tx) => {
        if (totals[tx.category] !== undefined) {
          totals[tx.category] += tx.amount;
        }
      });

    return categoryConfig.AVAILABLE_EXPENSE_CATEGORIES.map((cat) => ({
      name: cat,
      value: totals[cat] ?? 0,
    }));
  };

  const [transactionModalVisibility, setTransactionModalVisibility] =
    useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionDetails | null>(null);
  const [budgetModalVisibility, setBudgetModalVisibility] = useState(false);
  const [budgets, setBudgets] = useState<Record<string, number>>({});

  const budgetMutation = useEditBudgetData();

  if (isPending) {
    return <DashboardLoading />;
  }

  if (error) {
    return <DashboardError onRetry={refetch} />;
  }

  return (
    <div className="w-full min-h-screen flex justify-center font-serif bg-(--body-background) overflow-y-auto">
      {transactionModalVisibility && (
        <AddTransactionModal
          isVisible={transactionModalVisibility}
          setVisibility={setTransactionModalVisibility}
        />
      )}
      {editModalVisibility && selectedTransaction && (
        <EditTransactionModal
          isVisible={editModalVisibility}
          setVisibility={setEditModalVisibility}
          transaction={selectedTransaction}
        />
      )}

      {budgetModalVisibility && (
        <EditBudgetModal
          isVisible={budgetModalVisibility}
          setVisibility={setBudgetModalVisibility}
          initialData={getBudgetData(transactionData)}
          onSubmit={(data) =>
            budgetMutation.mutate(data, {
              onSuccess: (updated) => {
                const record: Record<string, number> = {};
                (updated || []).forEach(({ category, budget }) => {
                  record[category] = budget ?? 0;
                });
                setBudgets(record);
              },
            })
          }
        />
      )}

      <div className="bg-(--dashboard-background) w-full max-w-6xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 flex flex-col gap-6 min-h-screen">
        <div className='flex flex-col gap-6'>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-(--light-text-color)">
              Dashboard
            </span>
            <span className="text-base sm:text-lg text-(--muted-text)">
              Track and manage your expenses effectively
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="p-3 rounded-2xl cursor-pointer text-(--light-text-color) border sm:border-0"
              onClick={theme.toggleTheme}
            >
              <Sun />
            </button>
            <button
              className="bg-(--add-transaction-button-background) text-(--dark-text-color) px-4 py-2 rounded-xl w-full sm:w-auto"
              onClick={() => setTransactionModalVisibility(true)}
            >
              + Add Transaction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            Icon={Wallet}
            title="Total Balance"
            amount={getTotalBalance(transactionData)}
            percentChange={12.5}
            iconStyle="bg-orange-200 text-orange-600"
          />
          <SummaryCard
            Icon={TrendingUp}
            title="Total Income"
            amount={getTotalIncome(transactionData)}
            percentChange={8.2}
            iconStyle="bg-green-200 text-green-600"
          />
          <SummaryCard
            Icon={TrendingDown}
            title="Total Expense"
            amount={getTotalExpense(transactionData)}
            percentChange={3.1}
            iconStyle="bg-red-200 text-red-600"
          />
          <SummaryCard
            Icon={PiggyBank}
            title="Total Savings"
            amount={getTotalSavings()}
            percentChange={24.5}
            iconStyle="bg-purple-200 text-purple-600"
          />
        </div>

        <div className="w-full flex flex-col gap-4 min-h-0 lg:flex-row">
          <div className="w-full lg:w-10/25">
            <ExpenseByCategory data={getExpenseByCategoryData(transactionData)} />
          </div>
          <div className="w-full lg:w-15/25">
            <IncomeVSExpense />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 min-h-0 lg:flex-row">
          <div className="w-full">
            <RecentTransactions
              transactions={transactionData}
              onEditTransaction={(tx) => {
                setSelectedTransaction(tx);
                setEditModalVisibility(true);
              }}
            />
          </div>
          <div className="w-full">
            <BudgetOverview
              budgetData={getBudgetData(transactionData)}
              onEditBudget={() => setBudgetModalVisibility(true)}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
