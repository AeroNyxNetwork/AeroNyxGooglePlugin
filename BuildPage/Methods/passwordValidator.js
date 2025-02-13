/*
 * @Description:
 * @Date: 2024-12-26 11:41:12
 * @LastEditTime: 2025-01-09 11:16:38
 */
export function PasswordValidator(password, confirmPassword) {
  if (!password && !confirmPassword) {
    return "Password cannot be empty";
  }
  if (password !== confirmPassword) {
    return "The two inputs are inconsistent";
  }
  if (password.length < 8) return "At least 8 characters";

  if (!/[A-Z]/.test(password)) return "Contains at least one uppercase letter";

  if (!/[a-z]/.test(password)) return "Contain at least one lowercase letter";

  if (!/[0-9]/.test(password)) return "Contain at least one number";

  if (!/[!.@#$%^&*]/.test(password)) {
    return "Contain at least one special character";
  }

  return null;
}
