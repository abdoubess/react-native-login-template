export function passwordValidator(password) {
  if (!password) return "Password est obligatoire."
  if (password.length < 5) return 'Password doit contenir minimum 5 caractéres.'
  return ''
}
