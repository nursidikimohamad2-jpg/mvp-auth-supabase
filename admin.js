async function renderUsers() {
  const container = document.getElementById('users');
  container.innerHTML = 'Memuat...';
  const { data, error } = await supabase.from('profiles').select('email, admin, created_at');
  if (error) { container.innerHTML = 'Gagal memuat data'; return; }
  const list = document.createElement('ul');
  list.style.listStyle = 'none'; list.style.padding = '0';
  data.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `${u.email} (${u.admin ? "Admin" : "User"})`;
    list.appendChild(li);
  });
  container.innerHTML = ''; container.appendChild(list);
}