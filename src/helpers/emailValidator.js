export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Champ email est obligatoire."
  if (!re.test(email)) return 'Veuillez remplir une adresse mail valide.'
  return ''
}
