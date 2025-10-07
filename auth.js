// ===== AUTH UTIL =====
async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

async function signUpAndBootstrapProfile(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error };

  const user = await getUser();
  if (user) {
    await supabase.from('profiles').upsert({
      id: user.id,
      email: user.email,
      admin: false
    });
  }
  return { data, error: null };
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
}

async function isAdmin() {
  const user = await getUser();
  if (!user) return false;
  const { data } = await supabase.from('profiles')
    .select('admin')
    .eq('id', user.id)
    .maybeSingle();
  return !!data?.admin;
}

async function guardPage() {
  const user = await getUser();
  if (!user) window.location.href = 'index.html';
}

async function guardAdminPage() {
  await guardPage();
  if (!(await isAdmin())) window.location.href = 'dashboard.html';
}
