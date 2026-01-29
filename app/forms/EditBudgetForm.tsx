"use client";

import Form from "@rjsf/core";
import type { IChangeEvent } from "@rjsf/core";
import type { RJSFSchema, UiSchema, ValidatorType } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import schemaJSON from "@/app/RJSF/EditBudgetForm/schema.json";
import uiSchemaJSON from "@/app/RJSF/EditBudgetForm/uiSchema.json";
import { CustomFieldTemplate } from "./templates/CustomFieldTemplate";
import { CustomTextWidget } from "./widgets/CustomTextWidget";
import { useMutation } from "@tanstack/react-query";

export type BudgetFormData = Record<string, number>;
type BudgetEntry = { category: string; budget: number };

type Props = {
  initialData?: BudgetFormData;
  onSubmit?: (data: BudgetFormData) => void;
  setModalVisibility: (visibility: boolean) => void;
};

export default function EditBudgetForm({
  initialData,
  onSubmit,
  setModalVisibility,
}: Props) {
  const formSchema = schemaJSON as RJSFSchema;
  const uiSchema = uiSchemaJSON as UiSchema<BudgetFormData>;
  const typedValidator = validator as ValidatorType<BudgetFormData>;

  const mutation = useMutation({
    mutationFn: async (data: Record<string, number>) => {
      const res = await fetch("/api/current_budget_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save budgets");
      return res.json() as Promise<BudgetEntry[]>;
    },
    onSuccess: (updated) => {
      const mapped: BudgetFormData = Object.fromEntries(
        (updated || []).map((item) => [item.category, item.budget])
      );
      onSubmit?.(mapped);
      setModalVisibility(false);
    },
  });

  const handleFormSubmit = ({ formData }: IChangeEvent<BudgetFormData>) => {
    if (!formData) return;
    mutation.mutate(formData);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        w-120 max-h-140
        bg-(--dashboard-background)
        text-(--light-text-color)
        border
        z-50
        rounded-2xl
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        p-4
        flex flex-col
        overflow-auto
      "
    >
      <Form
        className="flex flex-col"
        schema={formSchema}
        uiSchema={uiSchema}
        validator={typedValidator}
        templates={{ FieldTemplate: CustomFieldTemplate }}
        widgets={{ TextWidget: CustomTextWidget }}
        formData={initialData}
        onSubmit={handleFormSubmit}
        onError={(errors) => console.warn("Budget form errors", errors)}
      />
    </div>
  );
}
