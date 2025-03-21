/* globals describe, expect, jest, test */

import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("useForm hook", () => {
  const initialForm = {
    name: "Kakarotto",
    email: "kakarotto@saiyajin.com",
  };
  const name = "Son Gokū";

  test("#1 should return default form state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange, onReset } = result.current;

    expect(formState).toEqual(initialForm);
    expect(typeof onInputChange).toBe("function");
    expect(typeof onReset).toBe("function");
  });

  test("#2 should update form state on input change", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: { name: "name", value: name },
      });
    });

    expect(result.current.formState).toEqual({ ...initialForm, name: name });
  });

  test("#3 should reset form state to initial values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onReset } = result.current;

    act(() => {
      onInputChange({
        target: { name: "name", value: name },
      });
    });

    expect(result.current.formState.name).toBe(name);

    act(() => {
      onReset({ preventDefault: jest.fn() });
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});
