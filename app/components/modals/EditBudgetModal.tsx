import EditBudgetForm, { BudgetFormData } from '../../forms/EditBudgetForm';

export default function EditBudgetModal({
  isVisible,
  setVisibility,
  initialData,
  onSubmit,
}: {
  isVisible: boolean;
  setVisibility: (visibility: boolean) => void;
  initialData?: BudgetFormData;
  onSubmit?: (data: BudgetFormData) => void;
}) {
  if (!isVisible) return null;

  return (
    <div
      onClick={() => setVisibility(false)}
      className="
        fixed inset-0
        bg-black/60
        z-50
        flex items-center justify-center
      "
    >
      <EditBudgetForm
        initialData={initialData}
        onSubmit={onSubmit}
        setModalVisibility={setVisibility}
      />
    </div>
  );
}

